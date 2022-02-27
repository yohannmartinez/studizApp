import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./SideContainer.scss";

const SideContainer = ({ children, closeAction }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.getElementById("sideContainer").style.transform = "translate(0,0)";
    window.addEventListener("resize", () => {
      document.body.style.overflow = "hidden";
    });
    return () => {
      document.body.style.overflow = "visible";
    };
  });

  const closeComponent = () => {
    document.getElementById("sideContainer").style.transform =
      "translate(100%,0)";
    window.setTimeout(() => {
      closeAction();
    }, 310);
  };

  return (
    <div className="sideContainer__globalContainer">
      <div
        className="sideContainer__background"
        onClick={() => {
          closeComponent();
        }}
      ></div>
      <div className="sideContainer__container" id="sideContainer">
        <button
          className="sideContainer__closeButton"
          onClick={() => {
            closeComponent();
          }}
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default SideContainer;
