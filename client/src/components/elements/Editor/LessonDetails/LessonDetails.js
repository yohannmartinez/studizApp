import { useEffect, useState } from "react";

import { getDetails } from "./data";
import { useTranslate } from "../../../../utils/useTranslate";

import Creator from "./Creator/Creator";
import Header from "./Header/Header";

import "./LessonDetails.scss";
import SideButtons from "./SideButtons/SideButtons";
import Modal from "../../Modal/Modal";
import ContentTable from "../../ContentTable/ContentTable";
import LessonInformations from "./LessonInformations/LessonInformations";

const LessonDetails = ({ editor, lesson, setShowDetails }) => {
  const { t } = useTranslate();
  const [showContentTable, setShowContentTable] = useState(false);
  const [showLessonInformations, setShowLessonInformations] = useState(false);
  const lessonToJSON = editor.getJSON();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.getElementById("lessonDetailsContainer").style.transform =
      "translateY(0)";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      {showContentTable && (
        <Modal
          width="90vw"
          maxWidth="500px"
          maxHeight="80vh"
          onBackgroundClick={() => {
            setShowContentTable(false);
          }}
        >
          <h1 className="lessonDetails__contentTableTitle">
            {t("CONTENT_TABLE")}
          </h1>
          <ContentTable
            lessonContentToJson={lessonToJSON}
            onElementClick={() => {
              setShowDetails(false);
            }}
          />
        </Modal>
      )}

      {showLessonInformations && (
        <LessonInformations
          closeAction={() => {
            setShowLessonInformations(false);
          }}
          lesson={lesson}
        />
      )}

      <div className="lessonDetails__globalContainer">
        <div
          className="lessonDetails__background"
          onClick={() => {
            setShowDetails(false);
          }}
        ></div>

        <div className="lessonDetails__container" id="lessonDetailsContainer">
          <SideButtons
            lesson={lesson}
            setShowLessonInformations={setShowLessonInformations}
          />
          <div className="lessonDetails__wrapper">
            <Header lesson={lesson} setShowContentTable={setShowContentTable} />
            <p className="lessonDetails__description">
              <b>Description</b>: {lesson.description}
            </p>
            <Creator creator={lesson.creator} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonDetails;
