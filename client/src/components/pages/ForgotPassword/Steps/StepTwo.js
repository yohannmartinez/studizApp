import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSnack, resetSnack } from "../../../../actions/snackActions";
import { updatePassword } from "../../../../services/user";
import { checkIfValidInputs } from "../../../../utils/inputsCheck";
import { useTranslate } from "../../../../utils/useTranslate";
import Input from "../../../elements/Input/Input";
import "./Steps.scss";

const StepTwo = ({ setSnack, resetSnack, nextStep, userId }) => {
  const { t } = useTranslate();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showSnack = (message, type) => {
    setSnack({
      show: true,
      duration: 4000,
      text: message,
      type: type,
      action: () => {
        resetSnack();
      },
    });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    let inputsToCheck = [
      { type: "password", value: password },
      { type: "password", value: confirmPassword },
    ];
    let { success, message } = checkIfValidInputs(inputsToCheck);
    if (password !== confirmPassword) {
      showSnack(t("PASSWORD_NOT_EQUAL_ERROR"), "error");
    } else {
      if (success) {
        const isUpdatedPassword = await updatePassword(userId, password);
        if (isUpdatedPassword.data.success) {
          showSnack(t("PASSWORD_UPDATE_SUCCESSFUL"), "success");
          history.push("/login");
        } else {
          showSnack(t("PASSWORD_UPDATE_ERROR"), "error");
        }
      } else {
        showSnack(t(message), "error");
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        changePassword(e);
      }}
    >
      <h1 className="forgotPassword__stepTitle">
        {t("FORGOT_PASSWORD_TITLE2")}
      </h1>
      <p className="forgotPassword__stepDescription">
        {t("FORGOT_PASSWORD_ENTER_PASSWORD")}
      </p>
      <Input
        value={password}
        inputColor="#9652B6"
        placeholder="PASSWORD"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <Input
        value={confirmPassword}
        inputColor="#9652B6"
        placeholder="CONFIRM_PASSWORD"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        type="password"
      />
      <button className="forgotPassword__stepButton" type={"submit"}>
        {t("LETS_GO")}
      </button>
    </form>
  );
};

export default connect(null, { setSnack, resetSnack })(StepTwo);
