import "./Logo.scss";

import StudizLogo from "../../../assets/pictures/logo_base.svg";
import StudizLogoWhite from "../../../assets/pictures/logo_white.svg";

const Logo = ({ action, fontClassName, logoClassName, type = "default" }) => {
  return (
    <div
      className="logo__container"
      onClick={() => {
        action();
      }}
    >
      <img
        src={type === "default" ? StudizLogo : StudizLogoWhite}
        className={`logo__image ${logoClassName}`}
        alt="studiz home"
      />
      <span className={`logo__text__${type} ${fontClassName}`}>Studiz</span>
    </div>
  );
};

export default Logo;
