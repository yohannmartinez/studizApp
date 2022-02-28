import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import Logo from "../../elements/Logo/Logo";
import { pages } from "./config";
import PageWrapper from "../PageWrapper/PageWrapper";
import "./Footer.scss";
import { Link, useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer__globalContainer">
      <PageWrapper>
        <div className="footer__container">
          <div className="footer__pagesContainer">
            <div className="footer__pageContainer">
              <Logo type={"white"} />
            </div>
            {pages.map((category) => (
              <div className="footer__pageContainer">
                <span className="footer__category">{category.name}</span>
                {category.links.map((page) => (
                  <div
                    className="footer__pageName"
                    onClick={() => {
                      history.push(page.link);
                    }}
                  >
                    {page.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="footer__separator"></div>
          <div className="footer__flexContainer">
            <p className="footer__studizDescription">
              Studiz a la volonté de contribuer à la réussite scolaire en
              proposant un outil pour les étudiants adapté à leurs besoins
            </p>
            <div className="footer__legalContainer">
              <span
                className="footer__legal"
                onClick={() => {
                  history.push("/privacyPolicy");
                }}
              >
                Politique de confidentialié
              </span>
              <span
                className="footer__legal"
                onClick={() => {
                  history.push("/termsOfUse");
                }}
              >
                Conditions d’utilisation
              </span>
            </div>
          </div>
          <div className="footer__separator"></div>
          <div className="footer__flexContainer">
            <span className="footer__studizCopyright">
              ©Copyright 2022 Studiz. Tout droit réservé.{" "}
              <Link to="/legalMentions">Mentions légales</Link>
            </span>
            <span className="footer__socialContainer">
              <a
                href="https://www.facebook.com/Studiz.officiel/"
                style={{ color: "white" }}
                target="blank"
              >
                <FaFacebookSquare className="footer__social" />
              </a>
              <a
                href="https://www.instagram.com/studiz.officiel/?hl=fr"
                style={{ color: "white" }}
                target="blank"
              >
                <GrInstagram className="footer__social" />
              </a>
            </span>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Footer;
