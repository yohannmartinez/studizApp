import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import "./Landing.scss";

import LandingExplications from "./LandingExplications/LandingExplications";
import LandingIntro from "./LandingIntro/LandingIntro";

const Landing = () => {
  return (
    <div className="landing__globalContainer">
      <Menu backgroundColor={"#F3F0FC"} />
      <LanguageSelect />
      <PageWrapper>
        <LandingIntro />
        <LandingExplications />
      </PageWrapper>
    </div>
  );
};

export default Landing;
