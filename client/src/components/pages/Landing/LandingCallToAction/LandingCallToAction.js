import "./LandingCallToAction.scss";

import Button from "../../../elements/Button/Button";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import { useHistory } from "react-router-dom";
import { useTranslate } from "../../../../utils/useTranslate";

const LandingCallToAction = () => {
  const { t } = useTranslate();
  const history = useHistory();
  
  return (
    <div className="landingCallToAction__globalContainer">
      <PageWrapper>
        <div className="landingCallToAction__flexContainer">
          <div className="landingCallToAction__container">
            <h1 className="landingCallToAction__title">
              {t("LANDING_CALL_TO_ACTION_TITLE")}
            </h1>
            <Button
              model={"white"}
              action={() => {
                history.push("/searchLessons");
              }}
            >
              {t("LANDING_CALL_TO_ACTION_BUTTON")}
            </Button>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingCallToAction;
