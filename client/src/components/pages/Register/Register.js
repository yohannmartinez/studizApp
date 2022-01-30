import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { resetSnack, setSnack } from "../../../actions/snackActions";
import Input from "../../elements/Input/Input";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Logo from "../../elements/Logo/Logo";
import "./Register.scss";
import { useTranslate } from "../../../utils/useTranslate";
import { checkIfValidInputs } from "../../../utils/inputsCheck";
import { registerUser } from "../../../services/user";

const Register = (props) => {
  const { t } = useTranslate();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstname: "",
    lastname: "",
  });
  const redirectLink = props.location.state?.redirectTo;

  const handleChangeInput = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const setSnackMessage = (type, message) => {
    return props.setSnack({
      show: true,
      duration: 4000,
      text: t(message),
      type,
      action: () => {
        props.resetSnack();
      },
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let inputsToCheck = [
      { type: "email", value: user.email },
      { type: "password", value: user.password },
      { type: "confirmPassword", value: user.confirmPassword },
      { type: "firstname", value: user.firstname },
      { type: "lastname", value: user.lastname },
      { type: "phoneNumber", value: user.phoneNumber },
    ];
    let { success, message } = checkIfValidInputs(inputsToCheck);
    if (user.password === user.confirmPassword) {
      if (success === true) {
        const createdUser = await registerUser(user);
        if (createdUser.data.success) {
          setSnackMessage("success", "USER_CREATED");
          history.push("/login");
        } else {
          setSnackMessage("error", createdUser.data.message);
        }
      } else {
        setSnackMessage("error", message);
      }
    } else {
      setSnackMessage("error", "CONFIRM_PASSWORD_ERROR");
    }
  };

  return (
    <div className="register__globalContainer">
      <LanguageSelect />
      <div className="register__formContainer">
        <div className="register__logoWrapper">
          <Logo
            action={() => {
              history.push("/");
            }}
            fontSize="24px"
            logoHeight="35px"
          />
        </div>
        <div className="register__whiteContainer">
          <h1 className="register__title">{t("REGISTER_TITLE")}</h1>
          <p className="register__description">{t("REGISTER_DESCRIPTION")}</p>
          <form
            className="register__inputsContainer"
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
            <Input
              value={user.confirmPassword}
              inputColor="#9652B6"
              label="CONFIRM_PASSWORD"
              onChange={(e) => {
                handleChangeInput("confirmPassword", e.target.value);
              }}
              type="password"
            />

            <Input
              value={user.firstname}
              inputColor="#9652B6"
              label="FIRSTNAME"
              onChange={(e) => {
                handleChangeInput("firstname", e.target.value);
              }}
              type="text"
            />

            <Input
              value={user.lastname}
              inputColor="#9652B6"
              label="LASTNAME"
              onChange={(e) => {
                handleChangeInput("lastname", e.target.value);
              }}
              type="text"
            />

            <Input
              value={user.phoneNumber}
              inputColor="#9652B6"
              label="PHONE_NUMBER"
              onChange={(e) => {
                handleChangeInput("phoneNumber", e.target.value);
              }}
              type="text"
            />

            <button className="register__submitButton" type="submit">
              {t("REGISTER_SUBMIT")}
            </button>
            <button
              className="register__createAccountButton"
              type="button"
              onClick={() => {
                history.push("/login");
              }}
            >
              {t("ALREADY_HAVE_ACCOUNT")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setSnack, resetSnack })(Register);
