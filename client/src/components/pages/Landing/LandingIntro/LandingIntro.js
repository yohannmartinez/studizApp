import "./LandingIntro.scss";
import { useTranslate } from "../../../../utils/useTranslate";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import Button from "../../../elements/Button/Button";
import DecorativeCircle from "../../../elements/DecorativeCircle/DecorativeCircle";
import { useHistory } from "react-router-dom";

const LandingIntro = () => {
  const { t } = useTranslate();
  const history = useHistory();
  return (
    <div className="landingIntro__globalContainer">
      <PageWrapper>
        <div className="landingIntro__flexContainer">
          <div className="landingIntro__container">
            <DecorativeCircle
              type={"border"}
              size={"20px"}
              top={"-50px"}
              left={"40%"}
            />
            <DecorativeCircle
              type={"border"}
              size={"15px"}
              bottom={"30%"}
              left={"-20px"}
            />
            <DecorativeCircle
              type={"default"}
              size={"14px"}
              top={"40%"}
              right={"-10px"}
            />
            <h1 className="landingIntro__title">
              Partage et récupère tes cours avec tes amis, ta classe ou avec la
              communauté d’étudiant !
            </h1>
            <p className="landingIntro__text">
              Studiz c’est le site fait pour les étudiants, par des étudiants.
              Un outil simple et optimisé pour travailler en groupe à distance
              comme en présentiel et réussir tes études haut la main !
            </p>
            <Button
              model={"basic"}
              action={() => {
                document
                  .getElementById("landingExplicationsFirstBlock")
                  .scrollIntoView({ block: "center" });
              }}
            >
              <span className="landingIntro__button">En savoir plus</span>
            </Button>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingIntro;
