import StudizLogo from "../../../assets/pictures/logo_base.svg";
import "./Logo.scss";

const Logo = ({ action, fontSize, logoHeight }) => {
  return (
    <div
      className="logo__container"
      style={{ fontSize }}
      onClick={() => {
        action();
      }}
    >
      <img
        src={StudizLogo}
        className="logo__image"
        style={{ height: logoHeight }}
        alt="studiz home"
      />
      Studiz
    </div>
  );
};

export default Logo;
