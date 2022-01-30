import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import "./Landing.scss";

import LandingExplications from "./LandingExplications/LandingExplications";
import LandingCreateLesson from "./LandingCreateLesson/LandingCreateLesson";
import LandingIntro from "./LandingIntro/LandingIntro";

const Landing = () => {
  return (
    <div className="landing__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <LanguageSelect />
      <LandingIntro />
      <LandingExplications />
      <LandingCreateLesson />
    </div>
  );
};

export default Landing;
