import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.scss";

const Modal = ({
  children,
  onBackgroundClick,
  width,
  height,
  maxWidth,
  maxHeight,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="modal__background" onClick={onBackgroundClick}></div>
      <div
        className="modal__whiteContainer"
        style={{ height, width, maxWidth, maxHeight }}
      >
        <IoMdClose className="modal__closeButton" onClick={onBackgroundClick} />
        {children}
      </div>
    </>
  );
};

export default Modal;
