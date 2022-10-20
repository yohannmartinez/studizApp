import "./LandingExplications.scss";

import DecorativeCircle from "../../../elements/DecorativeCircle/DecorativeCircle";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { useTranslate } from "../../../../utils/useTranslate";

const LandingExplications = () => {
  const { t } = useTranslate();

  return (
    <div className="landingExplications__globalContainer">
      <PageWrapper>
        <div
          className="landingExplications__container"
          id="landingExplicationsFirstBlock"
        >
          <div className="landingExplications__flexContainer">
            <div>
              <div className="landingExplications__shape__right"></div>
            </div>
            <div
              className="landingExplications__bloc"
              id="landingExplicationsRightBloc"
            >
              <span className="landingExplications__subTitle">
                <DecorativeCircle
                  type={"default"}
                  size={"12px"}
                  top={"-50px"}
                  left={"20%"}
                />
                {t("LANDING_SECTION_EXPLICATION_SUBTITLE")}
              </span>
              <h1 className="landingExplications__title">
                <DecorativeCircle
                  type={"border"}
                  size={"22px"}
                  top={"-40px"}
                  right={"20%"}
                />
                {t("LANDING_SECTION_EXPLICATION_TITLE")}
              </h1>
              <p className="landingExplications__text">
                <DecorativeCircle
                  type={"border"}
                  size={"22px"}
                  bottom={"-70px"}
                  left={"17%"}
                />
                {t("LANDING_SECTION_EXPLICATION_TEXT")}
              </p>
            </div>
          </div>
        </div>

        <div
          className="landingExplications__container"
          id="landingExplicationsSecondBlock"
        >
          <div className="landingExplications__flexContainer">
            <div
              className="landingExplications__bloc"
              id="landingExplicationsLeftBloc"
            >
              <span className="landingExplications__subTitle">
                <DecorativeCircle
                  type={"border"}
                  size={"15px"}
                  top={"-70px"}
                  right={"30%"}
                />
                {t("LANDING_SECTION_QUIZ_SUBTITLE")}
              </span>
              <h1 className="landingExplications__title">
                {t("LANDING_SECTION_QUIZ_TITLE")}
              </h1>
              <p className="landingExplications__text">
                <DecorativeCircle
                  type={"border"}
                  size={"20px"}
                  top={"-10px"}
                  left={"-50px"}
                />
                <DecorativeCircle
                  type={"default"}
                  size={"12px"}
                  bottom={"-60px"}
                  left={"50%"}
                />
                {t("LANDING_SECTION_QUIZ_TEXT")}
              </p>
            </div>
            <div>
              <div className="landingExplications__shape__left"></div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingExplications;
