import { connect } from "react-redux";
import { useHistory } from "react-router";
import { FaShare, FaInfoCircle } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

import { setSnack, resetSnack } from "../../../../../actions/snackActions";
import { deleteLesson } from "../../../../../services/lessons";

import "./SideButtons.scss";
import { useTranslate } from "../../../../../utils/useTranslate";

const SideButtons = ({
  lesson,
  auth,
  setShowLessonInformations,
  setSnack,
  resetSnack,
}) => {
  const { t } = useTranslate();
  const history = useHistory();
  const isLessonOwner =
    auth && auth.isAuthenticated && auth.user._id === lesson.userId;

  const handleSnack = (message, type) => {
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

  const copyLessonUrl = () => {
    navigator.clipboard
      .writeText(`https://studiz.eu/lesson/${lesson._id}`)
      .then(() => {
        handleSnack("LESSON_URL_COPIED", "success");
      })
      .catch(() => {
        handleSnack("LESSON_URL_COPY_FAILED", "error");
      });
  };

  const handleDeleteLesson = async () => {
    const deletedLesson = await deleteLesson(lesson._id);
    if (deletedLesson.data.success) {
      handleSnack("DELETE_LESSON_SUCCESS", "success");
      history.push("/searchLessons");
    } else {
      handleSnack("DELETE_LESSON_ERROR", "error");
    }
  };

  return (
    <div className="lessonDetails__sideButtons__container">
      <div
        className="lessonDetails__sideButtons__creatorImage"
        style={{
          backgroundImage: `url('${lesson.creator.profileImage}')`,
        }}
        onClick={() => {
          history.push(`/user/${lesson.creator._id}`);
        }}
      ></div>
      <div
        className="lessonDetails__sideButtons__button lessonDetails__sideButtons__button__copyLink"
        onClick={() => {
          copyLessonUrl();
        }}
      >
        <FaShare />
      </div>
      <div
        className="lessonDetails__sideButtons__button lessonDetails__sideButtons__button__showInfos"
        onClick={() => {
          setShowLessonInformations(true);
        }}
      >
        <FaInfoCircle />
      </div>
      {isLessonOwner && (
        <div
          className="lessonDetails__sideButtons__button lessonDetails__sideButtons__button__deleteLesson"
          onClick={() => {
            handleDeleteLesson();
          }}
        >
          <RiDeleteBin7Fill />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setSnack, resetSnack })(SideButtons);
