import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as NotLikedIcon } from "@fortawesome/fontawesome-free-regular";
import { faHeart as LikedIcon } from "@fortawesome/fontawesome-free-solid";

import { useState } from "react";
import { setSnack, resetSnack } from "../../../../../actions/snackActions";
import { useTranslate } from "../../../../../utils/useTranslate";
import "./LessonTopInformations.scss";
import { likeLesson } from "../../../../../services/lessonLikes";

const LessonTopInformations = ({
  lesson,
  setLesson,
  auth,
  setSnack,
  resetSnack,
}) => {
  const { t } = useTranslate();
  const [likeLoading, setLikeLoading] = useState(false);

  const userLikeLesson = lesson.likes.find(
    (like) => like.userId === auth.user._id
  );

  const handleSnack = (type, message) => {
    setSnack({
      show: true,
      duration: 4000,
      text: t(message),
      type: type,
      action: () => {
        resetSnack();
      },
    });
  };

  const handleLikeLesson = async () => {
    setLikeLoading(true);
    if (!auth.isAuthenticated) {
      handleSnack("error", "NEED_AUTH_ERROR");
    } else {
      const likedOrDisliked = await likeLesson(lesson._id, auth.user._id);
      if (!likedOrDisliked.data.success) {
        return handleSnack("error", "LIKE_LESSON_PROCESS_ERROR");
      }
      userLikeLesson
        ? setLesson({
            ...lesson,
            likes: lesson.likes.filter((like) => like.userId !== auth.user._id),
          })
        : setLesson({
            ...lesson,
            likes: [...lesson.likes, likedOrDisliked.data.like],
          });
    }
    setLikeLoading(false);
  };

  return (
    <div className="lessonTopData__infosContainer">
      <div className="lessonTopData__headingInfos">
        <div className="lessonTopData__headingInfos__container">
          <div className="lessonTopData__headingInfos__whiteContainer">
            <div className="lessonTopData__headingInfos__likesContainer">
              <div className="lessonTopData__headingInfos__info">
                <div
                  className="lessonTopData__headingInfos__infoHeading lessonTopData__headingInfos__heart"
                  onClick={() => {
                    !likeLoading && handleLikeLesson();
                  }}
                >
                  <FontAwesomeIcon
                    icon={userLikeLesson ? LikedIcon : NotLikedIcon}
                    style={{ color: userLikeLesson ? "#905BC7" : "black" }}
                  />
                </div>
                <div
                  className="lessonTopData__headingInfos__infoDescription"
                  style={{
                    color: userLikeLesson ? "#905BC7" : "black",
                    fontWeight: userLikeLesson ? "bold" : "500",
                  }}
                >
                  J'aime
                </div>
              </div>
            </div>
            <div className="lessonTopData__headingInfos__otherContainer">
              <div className="lessonTopData__headingInfos__info">
                <div className="lessonTopData__headingInfos__infoHeading">
                  {lesson.likes.length}
                </div>
                <div className="lessonTopData__headingInfos__infoDescription">
                  Ont aimé
                </div>
              </div>
              <div className="lessonTopData__headingInfos__info">
                <div className="lessonTopData__headingInfos__infoHeading">
                  {lesson.views}
                </div>
                <div className="lessonTopData__headingInfos__infoDescription">
                  Ont vu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setSnack, resetSnack })(
  LessonTopInformations
);
