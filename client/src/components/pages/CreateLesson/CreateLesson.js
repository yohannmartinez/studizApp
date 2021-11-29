import { useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../../elements/Menu/Menu";
import LanguageSelect from "../../elements/LanguageSelect/LanguageSelect";
import PageWrapper from "../../elements/PageWrapper/PageWrapper";
import { createLesson } from "../../../services/lessons";

import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import StepsBar from "./StepsBar/StepsBar";
import ThirdStep from "./ThirdStep/ThirdStep";
import "./CreateLesson.scss";
import { connect } from "react-redux";
import { useTranslate } from "../../../utils/useTranslate";

const CreateLesson = ({ auth }) => {
  const history = useHistory();
  const { t } = useTranslate();
  const [currentStep, setCurrentStep] = useState(0);
  const [lesson, setLesson] = useState({
    name: "",
    description: "",
    year: "",
    institution: "",
    studyField: "",
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

  const launchLessonCreation = async () => {
    const { data } = await createLesson(auth.user._id, lesson);
    if (data.success) history.push(`/lesson/${data.lesson._id}`);
  };

  return (
    <div className="createLesson__globalContainer">
      <Menu backgroundColor={"#F3F0FC"} />
      <LanguageSelect />

      <PageWrapper>
        <div className="createLesson__container">
          <div className="createLesson__whiteContainer">
            <div className="createLesson__header">
              <div className="createLesson__subTitle">
                {t("CREATE_LESSON_SUBTITLE")}
              </div>
              <h1 className="createLesson__title">
                {t("CREATE_LESSON_TITLE")}
              </h1>
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

            {currentStep === 2 && (
              <ThirdStep
                lesson={lesson}
                updateLesson={updateLesson}
                launchLessonCreation={launchLessonCreation}
                previousStep={previousStep}
              />
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(CreateLesson);
