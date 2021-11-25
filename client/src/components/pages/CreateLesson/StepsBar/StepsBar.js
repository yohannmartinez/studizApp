import "./StepsBar.scss";

const StepsBar = ({ currentStep }) => {
  const steps = ["La base", "Les filtres", "Cours créé"];

  const stepColor = (stepIndex) => {
    const doneStepColor = "#36b336";
    const currentStepColor = "#000000";
    const otherStepColor = "#bebebe";

    if (currentStep === stepIndex) return currentStepColor;
    if (stepIndex < currentStep) return doneStepColor;
    if (currentStep < stepIndex) return otherStepColor;
  };

  return (
    <div className="stepsBar__stepsContainer">
      {steps.map((step, index) => (
        <>
          <div
            className="stepsBar__step"
            style={{
              borderColor: stepColor(index),
              color: stepColor(index),
            }}
          >
            {index + 1}
            <div
              className="stepsBar__stepName"
              style={{ color: stepColor(index) }}
            >
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="stepsBar__stepSeparator"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default StepsBar;
