import "./LandingIntro.scss";
import Pen from "../../../../assets/icons/pen.png";
import Lesson from "../../../../assets/icons/lesson.png";
import { useTranslate } from "../../../../utils/useTranslate";

const LandingIntro = () => {
  const { t } = useTranslate();

  return (
    <div className="landingIntro__container">
      <div className="landingIntro__wrapper">
        <h1 className="landingIntro__title">{t("LANDING_INTRO_TITLE")}</h1>
        <p className="landingIntro__text">{t("LANDING_INTRO_TEXT")}</p>
        <button className="landingIntro__button">
          {t("LANDING_INTRO_BUTTON")}
        </button>
        <img src={Lesson} className="landingIntro__lesson" alt="studiz book" />
        <img src={Pen} className="landingIntro__pen" alt="studiz pen" />
      </div>
    </div>
  );
};

export default LandingIntro;
