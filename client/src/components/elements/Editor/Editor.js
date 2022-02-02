import { useState } from "react";
import { connect } from "react-redux";
import { useEditor, EditorContent } from "@tiptap/react";

import Color from "@tiptap/extension-color";
import EditorTooltip from "./EditorTooltip/EditorTooltip";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";

import { setSnack, resetSnack } from "../../../actions/snackActions";
import EditorAddElement from "./EditorAddElement/EditorAddElement";
import { saveLessonChanges } from "../../../services/lessons";
import { useTranslate } from "../../../utils/useTranslate";
import { Prompt } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LessonDetails from "./LessonDetails/LessonDetails";
import { UniqueID } from "./UniqueID";
import "./Editor.scss";

const Editor = ({ lesson, lessonData, canEdit, setSnack, resetSnack }) => {
  const [hasSaved, setHaveSaved] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useTranslate();
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

  const allBlockItems = [
    "heading",
    "paragraph",
    "image",
    "bulletList",
    "listItem",
    "orderedList",
  ];

  const editor = useEditor({
    editable: canEdit,
    extensions: [
      UniqueID.configure({
        types: allBlockItems,
      }),
      StarterKit,
      TextAlign.configure({
        types: allBlockItems,
      }),
      Highlight,
      Image,
      TextStyle,
      Color.configure({
        types: ["textStyle"],
      }),
    ],
    content: lessonData.content,
    onUpdate() {
      setHaveSaved(false);
    },
  });

  const saveChanges = async () => {
    const savedLesson = await saveLessonChanges(lesson._id, editor.getHTML());
    if (savedLesson.data.success) {
      handleSnack("success", "SAVED_CHANGES_SUCCESS");
    }
    setHaveSaved(true);
  };

  return (
    <div
      className="editor__container"
      onClick={() => {
        console.log(editor.getHTML());
      }}
    >
      <div className="editor__contentContainer">
        {editor && canEdit && <EditorTooltip editor={editor} />}

        {editor && canEdit && <EditorAddElement editor={editor} />}

        <EditorContent editor={editor} className="editor__editor" />

        {editor && (
          <div className="editor__bottomButtons__container">
            <button
              className="editor__saveButton"
              onClick={() => {
                if (canEdit) saveChanges();
              }}
            >
              {canEdit ? t("SAVE") : t("READONLY")}
            </button>
            <button
              className="editor__infoButton"
              onClick={() => {
                setShowDetails(true);
              }}
            >
              <FontAwesomeIcon icon={"bars"}></FontAwesomeIcon>
            </button>
          </div>
        )}

        <Prompt when={!hasSaved && canEdit} message={t("LESSON_NOT_SAVED")} />

        {showDetails && (
          <LessonDetails
            editor={editor}
            lesson={lesson}
            setShowDetails={setShowDetails}
          />
        )}
      </div>
    </div>
  );
};

export default connect(null, { setSnack, resetSnack })(Editor);
