import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { resetSnack, setSnack } from "../../../actions/snackActions";
import { loginUser } from "../../../actions/authActions";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Logo from "../../elements/Logo/Logo";
import "./Login.scss";
import { useTranslate } from "../../../utils/useTranslate";
import { checkIfValidInputs } from "../../../utils/inputsCheck";

const Login = (props) => {
  const { t } = useTranslate();
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const redirectLink = props.location.state?.redirectTo;

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
      ? props.loginUser(
          { email: user.email, password: user.password },
          history,
          redirectLink,
          t
        )
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
          />
        </div>
        <div className="login__flexContainer">
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
                label="EMAIL"
                onChange={(e) => {
                  handleChangeInput("email", e.target.value);
                }}
                type="text"
              />
              <Input
                value={user.password}
                inputColor="#9652B6"
                label="PASSWORD"
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
              <Button
                model={"basic"}
                type="submit"
                action={handleFormSubmit}
                style={{ marginTop: "20px" }}
              >
                {t("LOGIN_SUBMIT")}
              </Button>
            </form>
          </div>
        </div>
        <span className="login__createAccount">
          {t("DONT_HAVE_ACCOUNT")} ?{" "}
          <b
            className="login__createAccount__button"
            onClick={() => {
              history.push("/register");
            }}
          >
            {t("REGISTER_TITLE")}
          </b>
        </span>
      </div>
      <div className="login__sideContainer"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setSnack, resetSnack, loginUser })(
  Login
);
