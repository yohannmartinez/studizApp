import { useHistory } from "react-router-dom";
import Button from "../../../elements/Button/Button";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import "./LandingCallToAction.scss";

const LandingCallToAction = () => {
  const history = useHistory();
  return (
    <div className="landingCallToAction__globalContainer">
      <PageWrapper>
        <div className="landingCallToAction__flexContainer">
          <div className="landingCallToAction__container">
            <h1 className="landingCallToAction__title">
              J’accède aux cours postés par la communauté
            </h1>
            <Button
              model={"white"}
              action={() => {
                history.push("/searchLessons");
              }}
            >
              Montrez-moi
            </Button>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingCallToAction;
