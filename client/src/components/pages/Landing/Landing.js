import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import Footer from "../../elements/Footer/Footer";
import LandingCallToAction from "./LandingCallToAction/LandingCallToAction";
import LandingExplications from "./LandingExplications/LandingExplications";
import LandingIntro from "./LandingIntro/LandingIntro";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <LanguageSelect />
      <LandingIntro />
      <LandingExplications />
      <LandingCallToAction />
      <Footer />
    </div>
  );
};

export default Landing;
