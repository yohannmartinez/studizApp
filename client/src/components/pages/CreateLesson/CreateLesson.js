import { useState } from "react";
import Menu from "../../elements/Menu/Menu";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";

import "./CreateLesson.scss";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import StepsBar from "./StepsBar/StepsBar";

const CreateLesson = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [lesson, setLesson] = useState({
    name: "",
    description: "",
    year: "",
    institution: "",
    faculty: "",
    degree: "",
    city: "",
    private: false,
  });

  const updateLesson = (name, value) => {
    setLesson({ ...lesson, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="createLesson__globalContainer">
      <Menu backgroundColor={"#F3F0FC"} />
      <LanguageSelect />

      <PageWrapper>
        <div
          className="createLesson__container"
          onClick={() => {
            console.log(lesson);
          }}
        >
          <div className="createLesson__whiteContainer">
            <div className="createLesson__header">
              <div className="createLesson__subTitle">Commençons la</div>
              <h1 className="createLesson__title">Création de ton cours</h1>
            </div>

            <StepsBar currentStep={currentStep} />

            {currentStep === 0 && (
              <FirstStep
                lesson={lesson}
                updateLesson={updateLesson}
                nextStep={nextStep}
              />
            )}

            {currentStep === 1 && (
              <SecondStep
                lesson={lesson}
                updateLesson={updateLesson}
                nextStep={nextStep}
                previousStep={previousStep}
              />
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default CreateLesson;
