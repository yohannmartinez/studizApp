import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { resetSnack, setSnack } from "../../../actions/snackActions";
import { loginUser } from "../../../actions/authActions";
import Menu from "../../elements/Menu/Menu";
import Input from "../../elements/Input/Input";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Logo from "../../elements/Logo/Logo";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import "./Login.scss";
import { useTranslate } from "../../../utils/useTranslate";
import { checkIfValidInputs } from "../../../utils/inputsCheck";

const Login = (props) => {
  const { t } = useTranslate();
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChangeInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputsToCheck = [
      { type: "email", value: user.email },
      { type: "password", value: user.password },
    ];
    let { success, message } = checkIfValidInputs(inputsToCheck);
    return success === true
      ? props.loginUser({ email: user.email, password: user.password }, t)
      : props.setSnack({
          show: true,
          duration: 4000,
          text: t(message),
          type: "error",
          action: () => {
            props.resetSnack();
          },
        });
  };

  return (
    <div className="login__globalContainer">
      <LanguageSelect />
      <div className="login__formContainer">
        <div className="login__logoWrapper">
          <Logo
            action={() => {
              history.push("/");
            }}
            fontSize="24px"
            logoHeight="25px"
          />
        </div>
        <div className="login__whiteContainer">
          <h1 className="login__title">{t("LOGIN_TITLE")}</h1>
          <p className="login__description">{t("LOGIN_DESCRIPTION")}</p>
          <form
            className="login__inputsContainer"
            autoComplete="new-password"
            onSubmit={handleFormSubmit}
          >
            <Input
              value={user.email}
              inputColor="#9652B6"
              placeholder="EMAIL"
              onChange={(e) => {
                handleChangeInput("email", e.target.value);
              }}
              type="text"
            />
            <Input
              value={user.password}
              inputColor="#9652B6"
              placeholder="PASSWORD"
              onChange={(e) => {
                handleChangeInput("password", e.target.value);
              }}
              type="password"
            />
            <button
              className="login__forgotPasswordButton"
              type="button"
              onClick={() => {
                history.push("/forgotPassword");
              }}
            >
              {t("FORGOT_PASSWORD")}
            </button>
            <button className="login__submitButton" type="submit">
              {t("LOGIN_SUBMIT")}
            </button>
          </form>
        </div>
      </div>
      <div className="login__informations__container">
        <div className="login__informations__purpleBlock"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setSnack, resetSnack, loginUser })(
  Login
);
