import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FaBriefcase, FaLock, FaRegEye, FaUserGraduate } from "react-icons/fa";

import { useTranslate } from "../../../../../utils/useTranslate";
import "../profileContents.scss";
import { IoMdClose } from "react-icons/io";

const UserLessons = ({ lessons, title, auth }) => {
  const { t } = useTranslate();
  const history = useHistory();

  return (
    <div className="profileContents__lessonsContainer">
      <h1 className="profileContents__title">{t(title)}</h1>
      {lessons.map((lesson) => (
        <div
          className="profileContents__lesson__container"
          onClick={() => {
            history.push(`/lesson/${lesson._id}`);
          }}
        >
          <h1 className="profileContents__lesson__name">
            {lesson.name.charAt(0).toUpperCase() + lesson.name.slice(1)}
          </h1>
          <div className="profileContents__lesson__creatorContainer">
            <div
              className="profileContents__lesson__creatorImage"
              style={{
                backgroundImage: `url('${lesson.creator.profileImage}')`,
              }}
            ></div>
            <p className="profileContents__lesson__creatorName">
              {t("WRITTEN_BY") + " "}
              {lesson.userId === auth.user._id
                ? t("YOU")
                : `${lesson.creator.firstname} ${lesson.creator.lastname}`}
            </p>
          </div>
          <p className="profileContents__lesson__description">
            <b>Description: </b>
            {lesson.description}
          </p>
          <div className="profileContents__lesson__detailContainer">
            <span className="profileContents__lesson__detailIcon">
              <FaLock />
            </span>
            <span className="profileContents__lesson__detailText">
              {t("LESSON_RESULT_PRIVATE")}
              <b>{lesson.private ? t("PRIVATE") : t("NOT_PRIVATE")}</b>
            </span>
          </div>
          <div className="profileContents__lesson__detailContainer">
            <span className="profileContents__lesson__detailIcon">
              <FaUserGraduate />
            </span>
            <span className="profileContents__lesson__detailText">
              {t("LESSON_RESULT_LEVEL")}
              <b>{lesson.degree}</b>
            </span>
          </div>
          <div className="profileContents__lesson__detailContainer">
            <span className="profileContents__lesson__detailIcon">
              <FaBriefcase />
            </span>
            <span className="profileContents__lesson__detailText">
              {t("LESSON_RESULT_FACULTY")}
              <b>{t(lesson.studyField)}</b>
            </span>
          </div>
          <div className="profileContents__lesson__detailContainer">
            <span className="profileContents__lesson__detailIcon">
              <FaRegEye />
            </span>
            <span className="profileContents__lesson__detailText">
              <b>{lesson.views + " " + t("VIEWS")}</b>{" "}
              {t("LESSON_RESULT_VIEWS")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(UserLessons);
