import { connect } from "react-redux";
import { FloatingMenu } from "@tiptap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { uploadImage } from "../../../../services/s3";
import { setSnack, resetSnack } from "../../../../actions/snackActions";
import { useTranslate } from "../../../../utils/useTranslate";
import "./EditorAddElement.scss";

const EditorAddElement = ({ editor, setSnack, resetSnack }) => {
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

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (image.size > 1000000) {
      return handleSnack("error", "IMAGE_TOO_BIG");
    }
    const imageData = new FormData();
    imageData.append("file", image);
    const uploadedImage = await uploadImage(imageData);
    if (uploadedImage.data.success) {
      editor.chain().focus().setImage({ src: uploadedImage.data.file }).run();
    } else {
      handleSnack("error", "IMAGE_UPLOAD_FAIL");
    }
  };

  return (
    <FloatingMenu
      className="editorAddElement__buttonsContainer"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "editorAddElement__button__active"
            : "editorAddElement__button"
        }
      >
        <FontAwesomeIcon icon={"heading"} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "editorAddElement__button__active"
            : "editorAddElement__button"
        }
      >
        <FontAwesomeIcon icon={"heading"} style={{ fontSize: "12px" }} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={"editorAddElement__button"}
      >
        <FontAwesomeIcon icon={"list"} />
      </button>
      <label className="editorAddElement__button" htmlFor="imageInput">
        <FontAwesomeIcon icon={"images"} />
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="editorAddElement__input"
        onChange={handleImageUpload}
      />
    </FloatingMenu>
  );
};

export default connect(null, { setSnack, resetSnack })(EditorAddElement);
