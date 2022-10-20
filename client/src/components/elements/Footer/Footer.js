import "./Footer.scss";

import { Link, useHistory } from "react-router-dom";

import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../../elements/Logo/Logo";
import PageWrapper from "../PageWrapper/PageWrapper";
import { getPages } from "./config";
import { useTranslate } from "../../../utils/useTranslate";

const Footer = () => {
  const { t, currentLanguage } = useTranslate();
  const history = useHistory();
  
  return (
    <div className="footer__globalContainer">
      <PageWrapper>
        <div className="footer__container">
          <div className="footer__pagesContainer">
            <div className="footer__pageContainer">
              <Logo type={"white"} />
            </div>
            {getPages(currentLanguage).map((category) => (
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
              {t("FOOTER_DESCRIPTION")}
            </p>
            <div className="footer__legalContainer">
              <span
                className="footer__legal"
                onClick={() => {
                  history.push("/privacyPolicy");
                }}
              >
                {t("FOOTER_POLICY")}
              </span>
              <span
                className="footer__legal"
                onClick={() => {
                  history.push("/termsOfUse");
                }}
              >
                {t("FOOTER_TERMS")}
              </span>
            </div>
          </div>
          <div className="footer__separator"></div>
          <div className="footer__flexContainer">
            <span className="footer__studizCopyright">
              {t("FOOTER_COPYRIGHT")}{" "}
              <Link to="/legalMentions">{t("FOOTER_LEGAL_MENTION")}</Link>
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
