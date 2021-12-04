import { useState } from "react";

import { useTranslate } from "../../../utils/useTranslate";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import Menu from "../../elements/Menu/Menu";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  const { t } = useTranslate();
  const [step, setStep] = useState(0);
  const [userId, setUserId] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="forgotPassword__globalContainer">
      <Menu backgroundColor={"#f4f0fc"} />
      <LanguageSelect />
      <PageWrapper>
        <div className="forgotPassword__container">
          <div className="forgotPassword__whiteContainer">
            {step === 0 && (
              <StepOne nextStep={nextStep} setUserId={setUserId} />
            )}

            {step === 1 && <StepTwo nextStep={nextStep} userId={userId} />}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default ForgotPassword;
