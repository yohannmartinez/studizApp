import { useEffect } from "react";
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
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      <div className="modal__background" onClick={onBackgroundClick}></div>
      <div
        className="modal__whiteContainer"
        style={{ height, width, maxWidth, maxHeight }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
