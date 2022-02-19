import DecorativeCircle from "../../../elements/DecorativeCircle/DecorativeCircle";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import "./LandingExplications.scss";

const LandingExplications = () => {
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
                LES COURS
              </span>
              <h1 className="landingExplications__title">
                <DecorativeCircle
                  type={"border"}
                  size={"22px"}
                  top={"-40px"}
                  right={"20%"}
                />
                Ajoutes tes cours pour tous niveaux, toutes matières
              </h1>
              <p className="landingExplications__text">
                <DecorativeCircle
                  type={"border"}
                  size={"22px"}
                  bottom={"-70px"}
                  left={"17%"}
                />
                Studiz aide les étudiants à centraliser les différents besoins
                des étudiants en proposant de nombreuses fonctionnalités comme
                l’écriture et le partage de cours et bien d’autres.
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
                LES QUIZZ
              </span>
              <h1 className="landingExplications__title">
                Trouves des quizz pour confirmer tes compétences
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
                Tu peux créer des quizz ou pratiquer sur ceux existants. Les
                quizz permettent de valider les acquis sur un cours écrit sur
                studiz !
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
