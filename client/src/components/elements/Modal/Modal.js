import { useEffect } from "react";
import "./Modal.scss";

const Modal = ({ children, onBackgroundClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      <div className="modal__background" onClick={onBackgroundClick}></div>
      <div className="modal__whiteContainer">{children}</div>
    </>
  );
};

export default Modal;
