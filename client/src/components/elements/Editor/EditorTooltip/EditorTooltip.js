import { BubbleMenu } from "@tiptap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";

import "./EditorToolTip.scss";

const EditorTooltip = ({ editor }) => {
  const colors = ["#000000", "#54d2d2", "#ffcb00", "#f8aa4b", "#ff6150"];
  const changeColor = (color) => {
    editor.chain().focus().setColor(color).run();
  };
  return (
    <BubbleMenu
      className="editorTooltip__bubbleMenu"
      tippyOptions={{ duration: 100, hideOnClick: false }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"heading"} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"heading"} style={{ fontSize: "12px" }} />
      </button>
      <div
        style={{ color: editor.getAttributes("textStyle").color }}
        className={"editorTooltip__bubbleMenu__colorSelector"}
      >
        <div className="editorTooltip__bubbleMenu__colorsContainer">
          {colors.map((color) => (
            <div
              className="editorTooltip__bubbleMenu__color"
              style={{ backgroundColor: color }}
              onClick={() => {
                changeColor(color);
              }}
            ></div>
          ))}
        </div>
        <FontAwesomeIcon icon={"paint-brush"} />
      </div>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive("highlight")
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={faHighlighter} />
      </button>

      <div className="editorTooltip__bubbleMenu__separator"></div>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"bold"} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"italic"} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"strikethrough"} />
      </button>

      <div className="editorTooltip__bubbleMenu__separator"></div>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={
          editor.isActive({ textAlign: "left" })
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"align-left"} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={
          editor.isActive({ textAlign: "center" })
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"align-center"} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={
          editor.isActive({ textAlign: "right" })
            ? "editorTooltip__bubbleMenu__button__active"
            : "editorTooltip__bubbleMenu__button"
        }
      >
        <FontAwesomeIcon icon={"align-right"} />
      </button>
    </BubbleMenu>
  );
};

export default EditorTooltip;
