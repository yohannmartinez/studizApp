import {
  FaBriefcase,
  FaLock,
  FaUserGraduate,
  FaSchool,
  FaDirections,
} from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import { useTranslate } from "../../../../../utils/useTranslate";
import Modal from "../../../Modal/Modal";
import "./LessonInformations.scss";

const LessonInformations = ({ closeAction, lesson }) => {
  console.log(lesson);
  const { t } = useTranslate();

  const lessonDetails = [
    {
      icon: <FaLock />,
      text: (
        <span className="lessonInformations__lessonDetailText">
          {t("LESSON_RESULT_PRIVATE")}
          <b>{lesson.private ? t("PRIVATE") : t("NOT_PRIVATE")}</b>
        </span>
      ),
    },
    {
      icon: <FaUserGraduate />,
      text: (
        <span className="lessonInformations__lessonDetailText">
          {t("LESSON_RESULT_LEVEL")}
          <b>{lesson.degree}</b>
        </span>
      ),
    },
    {
      icon: <FaBriefcase />,
      text: (
        <span className="lessonInformations__lessonDetailText">
          {t("LESSON_RESULT_FACULTY")}
          <b>{t(lesson.studyField)}</b>
        </span>
      ),
    },
    {
      icon: <MdOutlineUpdate />,
      text: (
        <span className="lessonInformations__lessonDetailText">
          {t("LESSON_LAST_UPDATE")}
          <b>{new Date(lesson.lastModification).toLocaleDateString()}</b>
        </span>
      ),
    },
    {
      icon: <FaSchool />,
      text: (
        <span className="lessonInformations__lessonDetailText">
          {t("LESSON_INSTITUTION")}
          <b>{lesson.institution}</b>
        </span>
      ),
    },
    {
      icon: <FaDirections />,
      text: (
        <span className="lessonInformations__lessonDetailText">
          {t("LESSON_CITY")}
          <b>{lesson.city}</b>
        </span>
      ),
    },
  ];

  return (
    <Modal
      width="90vw"
      maxWidth="500px"
      maxHeight="80vh"
      onBackgroundClick={closeAction}
    >
      <div className="lessonInformations__container">
        <h1>Détails de la leçon</h1>

        <div className="lessonInformations__numbersContainer">
          <div className="lessonInformations__numberContainer">
            <div className="lessonInformations__number">
              {lesson.likes.length}
            </div>
            <div className="lessonInformations__numberText">{t("LIKES")}</div>
          </div>
          <div className="lessonInformations__numberContainer">
            <div className="lessonInformations__number">{lesson.views}</div>
            <div className="lessonInformations__numberText">{t("VIEWS")}</div>
          </div>
        </div>

        <div className="lessonInformations__lessonDetail">
          {lessonDetails.map((lessonDetail) => (
            <div className="lessonInformations__lessonDetailContainer">
              <span className="lessonInformations__lessonDetailIcon">
                {lessonDetail.icon}
              </span>{" "}
              {lessonDetail.text}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default LessonInformations;
