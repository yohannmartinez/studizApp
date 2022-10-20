import "./LandingIntro.scss";

import Button from "../../../elements/Button/Button";
import DecorativeCircle from "../../../elements/DecorativeCircle/DecorativeCircle";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../../utils/useTranslate";

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
              {t("LANDING_INTRO_TITLE")} 
            </h1>
            <p className="landingIntro__text">
              {t("LANDING_INTRO_TEXT")}
            </p>
            <Button
              model={"basic"}
              action={() => {
                document
                  .getElementById("landingExplicationsFirstBlock")
                  .scrollIntoView({ block: "center" });
              }}
            >
              <span className="landingIntro__button">
                {t("LANDING_INTRO_BUTTON")}
              </span>
            </Button>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingIntro;
