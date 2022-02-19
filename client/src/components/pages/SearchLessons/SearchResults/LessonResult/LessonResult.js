import { FaBriefcase, FaLock, FaUserGraduate, FaRegEye } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart } from "react-icons/fa";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../../../utils/useTranslate";

import "./LessonResult.scss";

const LessonResult = ({ lesson, language, auth }) => {
  const {
    _id,
    name,
    creator,
    views,
    studyField,
    degree,
    year,
    description,
    likes,
  } = lesson;
  const { t } = useTranslate();
  const history = useHistory();

  return (
    <div
      className="lessonResult__container"
      key={_id}
      onClick={() => {
        history.push(`/lesson/${lesson._id}`);
      }}
    >
      <div className="lessonResult__likeContainer">
        <FaRegHeart />
      </div>
      <h1 className="lessonResult__lessonTitle">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <div className="lessonResult__creatorContainer">
        <div
          className="lessonResult__creatorImage"
          style={{ backgroundImage: `url('${creator.profileImage}')` }}
        ></div>
        <p className="lessonResult__creatorName">
          {t("WRITTEN_BY") + " "}
          {lesson.userId === auth.user._id
            ? t("YOU")
            : `${creator.firstname} ${creator.lastname}`}
        </p>
      </div>
      <div className="lessonResult__description">
        <b>Description: </b>
        {`${
          description.charAt(0).toUpperCase() +
          description.slice(1, description.length)
        }`}
      </div>
      <div className="lessonResult__detailContainer">
        <span className="lessonResult__detailIcon">
          <FaLock />
        </span>
        <span className="lessonResult__detailText">
          {t("LESSON_RESULT_PRIVATE")}
          <b>{lesson.private ? t("PRIVATE") : t("NOT_PRIVATE")}</b>
        </span>
      </div>
      <div className="lessonResult__detailContainer">
        <span className="lessonResult__detailIcon">
          <FaUserGraduate />
        </span>
        <span className="lessonResult__detailText">
          {t("LESSON_RESULT_LEVEL")}
          <b>{lesson.degree}</b>
        </span>
      </div>
      <div className="lessonResult__detailContainer">
        <span className="lessonResult__detailIcon">
          <FaBriefcase />
        </span>
        <span className="lessonResult__detailText">
          {t("LESSON_RESULT_FACULTY")}
          <b>{t(lesson.studyField)}</b>
        </span>
      </div>
      <div className="lessonResult__detailContainer">
        <span className="lessonResult__detailIcon">
          <FaRegEye />
        </span>
        <span className="lessonResult__detailText">
          <b>{lesson.views + " " + t("VIEWS")}</b> {t("LESSON_RESULT_VIEWS")}
        </span>
      </div>
      {/* <div className="lessonResult__header">
        <h1 className="lessonResult__lessonTitle">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
        <div className="lessonResult__lessonViews">
          <FontAwesomeIcon
            icon={faEye}
            className="lessonResult__lessonViews__icon"
          />
          {views}
        </div>
      </div>
      <div className="lessonResult__creatorContainer">
        <div
          className="lessonResult__creatorImage"
          style={{ backgroundImage: `url('${creator.profileImage}')` }}
        ></div>
        <p className="lessonResult__creatorName">
          {t("WRITTEN_BY") + " "}
          <b>
            {lesson.userId === auth.user._id
              ? t("YOU")
              : `${creator.firstname} ${creator.lastname}`}
          </b>
        </p>
      </div>
      <div className="lessonResult__description">
        <b>Description: </b>
        {`${
          description.charAt(0).toUpperCase() +
          description.slice(1, description.length)
        }`}
      </div>

      <div className="lessonResult__tagsContainer">
        <h1 className="lessonResult__tag lessonResult__purpleTag">
          {t(studyField)}
        </h1>
        <div className="lessonResult__tag lessonResult__yellowTag">
          {t(degree)}
        </div>
        <div className="lessonResult__tag lessonResult__greenTag">{year}</div>
        <div className="lessonResult__tag lessonResult__blueTag">
          {likes.length} {t("LIKES")}
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  language: state.language,
});

export default connect(mapStateToProps, null)(LessonResult);
