import "./StepsBar.scss";

const StepsBar = ({ currentStep }) => {
  const steps = ["La base", "Les filtres", "Cours créé"];
  return (
    <div className="stepsBar__stepsContainer">
      {steps.map((step, index) => (
        <>
          <div
            className="stepsBar__step"
            style={{
              borderColor: currentStep > index ? "#36b336" : "black",
              color: currentStep > index ? "#36b336" : "black",
            }}
          >
            {index + 1}
            <div
              className="stepsBar__stepName"
              style={{ color: currentStep > index ? "#36b336" : "black" }}
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
