import "./LandingIntro.scss";
import Pen from "../../../../assets/icons/pen.png";
import Lesson from "../../../../assets/icons/lesson.png";
import { useTranslate } from "../../../../utils/useTranslate";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/fontawesome-free-solid";
import LandingImage from "../../../../assets/pictures/landing1.png";

const LandingIntro = () => {
  const { t } = useTranslate();

  return (
    <div className="landingIntro__globalContainer">
      <PageWrapper>
        <div className="landingIntro__container">
          <div className="landingIntro__flexElementLeft">
            <div className="landingIntro__subTitle">
              <FontAwesomeIcon
                icon={"bullhorn"}
                style={{ marginRight: "10px" }}
              />
              Commencez à apprendre plus rapidement !
            </div>
            <h1 className="landingIntro__title">
              On aide{" "}
              <b style={{ fontWeight: "800", color: "#70529d" }}>
                les étudiants
              </b>{" "}
              à centraliser leurs besoins scolaires
            </h1>
            <p className="landingIntro__text">
              Studiz est une plateforme qui favorise l'apprentisage pour les
              étudiants, des cours, des leçons et plein d'autres choses vous
              attendent !
            </p>
            <button className="landingIntro__button">Voir la suite</button>
          </div>
          <div className="landingIntro__flexElementRight">
            <img
              src={LandingImage}
              className="landingIntro__image"
              alt={"landing studiz"}
            />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingIntro;
