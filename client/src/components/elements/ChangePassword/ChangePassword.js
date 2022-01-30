import { useState } from "react";
import { connect } from "react-redux";

import { setSnack, resetSnack } from "../../../actions/snackActions";
import { updatePassword } from "../../../services/user";
import { checkIfValidInputs } from "../../../utils/inputsCheck";
import { useTranslate } from "../../../utils/useTranslate";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import "./ChangePassword.scss";

const ChangePassword = ({ userId, onCancel, setSnack, resetSnack }) => {
  const { t } = useTranslate();
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSnack = (type, message) => {
    setSnack({
      show: true,
      duration: 4000,
      text: t(message),
      type: type,
      action: () => {
        resetSnack();
      },
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const { success, message } = checkIfValidInputs([
      { type: "password", value: actualPassword },
      { type: "password", value: newPassword },
    ]);
    if (success) {
      const updatedPassword = await updatePassword(
        userId,
        actualPassword,
        newPassword
      );
      if (updatedPassword.data.success) {
        handleSnack("success", "PASSWORD_UPDATE_SUCCESSFUL");
        onCancel();
      } else {
        handleSnack("error", updatedPassword.data.message);
      }
    } else {
      handleSnack("error", message);
    }
  };

  return (
    <Modal
      width="90vw"
      maxWidth="400px"
      maxHeight="700px"
      onBackgroundClick={() => {
        onCancel();
      }}
    >
      <form
        onSubmit={(e) => {
          handleChangePassword(e);
        }}
        className="changePassword__form"
      >
        <h1 className="changePassword__title">Changer de mot de passe</h1>
        <Input
          value={actualPassword}
          inputColor="#9652B6"
          label="OLD_PASSWORD"
          placeholder={t("OLD_PASSWORD")}
          onChange={(e) => {
            setActualPassword(e.target.value);
          }}
          type="password"
        />
        <Input
          value={newPassword}
          inputColor="#9652B6"
          label="NEW_PASSWORD"
          placeholder={t("NEW_PASSWORD")}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          type="password"
        />
        <button className="changePassword__button">{t("CONFIRM")}</button>
      </form>
    </Modal>
  );
};

export default connect(null, { setSnack, resetSnack })(ChangePassword);
