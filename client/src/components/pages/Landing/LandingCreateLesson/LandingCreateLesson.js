import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import "./LandingCreateLesson.scss";

const LandingCreateLesson = () => {
  return (
    <PageWrapper>
      <div className="landingCreateLesson__container">
        <div className="landingCreateLesson__leftElement">
          <h1 className="landingCreateLesson__title">
            Partages tes cours avec la communauté sur Studiz
          </h1>
          <button className="landingCreateLesson__button">J'y vais</button>
        </div>
        <div className="landingCreateLesson__rightElement"></div>
      </div>
    </PageWrapper>
  );
};

export default LandingCreateLesson;
