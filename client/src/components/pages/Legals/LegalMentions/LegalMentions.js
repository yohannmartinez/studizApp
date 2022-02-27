import Footer from "../../../elements/Footer/Footer";
import Menu from "../../../elements/Menu/Menu";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";

const LegalMentions = () => {
  return (
    <div className="legal__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <PageWrapper>
        <div className="legal__container">
          <h2 className="legal__categoryTitle" style={{ textAlign: "center" }}>
            Mentions légales
          </h2>
          <p className="legal__text" style={{ textAlign: "center" }}>
            SAS Studiz
            <br />
            Adresse : 19 Bis avenue du général de Gaulle, 37000 Tours
            <br />
            Mail de contact : Studiz.officiel@gmail.com
            <br />
            SAS d’un Capital de 15 000€
            <br />
            Président : Hugo Roulet
            <br />
            Directeur du développement : Yohann Martinez
            <br />
            Hébergeur : Amazon Web Services, Inc.
            <br />
            410 Terry Ave. North
            <br />
            Seattle, WA 98109-5210
            <br />
            +1 (206) 266-4064
            <br />
          </p>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default LegalMentions;
