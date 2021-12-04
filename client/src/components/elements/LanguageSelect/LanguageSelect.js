import { connect } from "react-redux";

import { setLanguage } from "../../../actions/languageActions";
import FrFlag from "../../../assets/pictures/flags/fr_flag.svg";
import EnFlag from "../../../assets/pictures/flags/en_flag.svg";
import "./LanguageSelect.scss";
import { useState } from "react";

const LanguageSelect = ({ language, setLanguage, auth }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const languages = [
    { label: "FR", value: "fr", flag: FrFlag },
    { label: "EN", value: "en", flag: EnFlag },
  ];
  const currentLanguage = languages.find(({ value }) => {
    return value === language.current_language;
  });

  return (
    <>
      {!auth.isAuthenticated && (
        <div
          className="languageSelect__container"
          onClick={() => {
            setIsOpenSelect(!isOpenSelect);
          }}
        >
          {currentLanguage.label}{" "}
          <img
            src={currentLanguage.flag}
            alt={`studiz current language is ${currentLanguage.label}`}
            className="languageSelect__flag"
          />
          {isOpenSelect && (
            <div className="languageSelect__optionsContainer">
              {languages.map(({ label, value, flag }) => (
                <div
                  key={"langugage-" + label}
                  className="languageSelect__option"
                  onClick={() => {
                    setLanguage(value);
                  }}
                >
                  <img
                    src={flag}
                    alt={`set studiz language to ${label}`}
                    className="languageSelect__flag"
                  />
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
  auth: state.auth,
});

export default connect(mapStateToProps, { setLanguage })(LanguageSelect);
