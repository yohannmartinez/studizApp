import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useTranslate } from "../../../../utils/useTranslate";
import ContentTable from "../../ContentTable/ContentTable";
import { getDetails } from "./data";
import "./LessonDetails.scss";

const LessonDetails = ({ editor, lesson, setShowDetails }) => {
  const { t } = useTranslate();
  const [isContentTableOpened, setIsContentTableOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.getElementById("lessonDetailsContainer").style.transform =
      "translateY(0)";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const closeLessonDetails = () => {
    setShowDetails(false);
  };

  return (
    <div
      className="lessonDetails__globalContainer"
      onClick={() => {
        console.log(lesson);
      }}
    >
      <div
        className="lessonDetails__background"
        onClick={() => {
          setShowDetails(false);
        }}
      ></div>

      <div className="lessonDetails__container" id="lessonDetailsContainer">
        <div className="lessonDetails__wrapper">
          <p className="lessonDetails__lesson__subTitle">
            {t("LESSON_DETAILS")}
          </p>
          <h1 className="lessonDetails__lesson__name">{lesson.name}</h1>
          <p className="lessonDetails__lesson__description">
            <b>Description:</b> {lesson.description}
          </p>
          <button
            className="lessonDetails__lesson__contentTable"
            onClick={() => {
              setIsContentTableOpened(!isContentTableOpened);
            }}
          >
            {t("CONTENT_TABLE")}{" "}
            <FontAwesomeIcon
              icon={isContentTableOpened ? "chevron-up" : "chevron-down"}
              style={{ fontSize: "13px", marginLeft: "5px" }}
            />
          </button>
          {isContentTableOpened && (
            <ContentTable
              lessonContentToJson={editor.getJSON()}
              onElementClick={closeLessonDetails}
            />
          )}

          <div className="lessonDetails__detailsContainer">
            {getDetails(t, lesson).map((detail) => (
              <div className="lessonDetails__detailContainer">
                <div className="lessonDetails__iconContainer">
                  <FontAwesomeIcon
                    icon={detail.icon}
                    className="lessonDetails__detailIcon"
                  />
                </div>
                <h1 className="lessonDetails__detailTitle">{detail.title}</h1>
                <p className="lessonDetails__detailContent">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
