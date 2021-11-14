import { useState } from "react";
import { connect } from "react-redux";

import { setSnack, resetSnack } from "../../../../actions/snackActions";
import { getUserByEmail } from "../../../../services/user";
import { useTranslate } from "../../../../utils/useTranslate";
import Input from "../../../elements/Input/Input";
import "./Steps.scss";

const StepOne = ({ setSnack, resetSnack, nextStep, setUserId }) => {
  const { t } = useTranslate();
  const [email, setEmail] = useState("");

  const checkEmail = async (e) => {
    e.preventDefault();
    const emailExist = await getUserByEmail(email);
    if (emailExist.data.user) {
      setSnack({
        show: true,
        duration: 4000,
        text: t("FIND_EMAIL_SUCCESSFUL"),
        type: "success",
        action: () => {
          resetSnack();
        },
      });
      setUserId(emailExist.data.user._id);
      nextStep();
    } else {
      setSnack({
        show: true,
        duration: 4000,
        text: t("EMAIL_DONT_EXIST"),
        type: "error",
        action: () => {
          resetSnack();
        },
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        checkEmail(e);
      }}
    >
      <h1 className="forgotPassword__stepTitle">
        {t("FORGOT_PASSWORD_TITLE1")}
      </h1>
      <p className="forgotPassword__stepDescription">
        {t("FORGOT_PASSWORD_ENTER_EMAIL")}
      </p>
      <Input
        value={email}
        inputColor="#9652B6"
        placeholder="EMAIL"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
      />
      <button className="forgotPassword__stepButton" type={"submit"}>
        {t("LETS_GO")}
      </button>
    </form>
  );
};

export default connect(null, { setSnack, resetSnack })(StepOne);
