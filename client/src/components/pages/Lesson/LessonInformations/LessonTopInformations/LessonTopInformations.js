import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as NotLikedIcon } from "@fortawesome/fontawesome-free-regular";
import "./LessonTopInformations.scss";

const LessonTopInformations = ({ lesson }) => {
  return (
    <div className="lessonTopData__infosContainer">
      <div className="lessonTopData__headingInfos">
        <div className="lessonTopData__headingInfos__container">
          <div className="lessonTopData__headingInfos__whiteContainer">
            <div className="lessonTopData__headingInfos__likesContainer">
              <div className="lessonTopData__headingInfos__info">
                <div className="lessonTopData__headingInfos__infoHeading lessonTopData__headingInfos__heart">
                  <FontAwesomeIcon icon={NotLikedIcon} />
                </div>
                <div className="lessonTopData__headingInfos__infoDescription">
                  J'aime
                </div>
              </div>
            </div>
            <div className="lessonTopData__headingInfos__otherContainer">
              <div className="lessonTopData__headingInfos__info">
                <div className="lessonTopData__headingInfos__infoHeading">
                  {lesson.likes}
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

export default LessonTopInformations;
