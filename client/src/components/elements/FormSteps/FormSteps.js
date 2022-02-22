import "./FormSteps.scss";

const FormSteps = ({ steps, currentStep }) => {
  const getBarLength = () => {
    return (100 * (currentStep + 1)) / steps.length;
  };

  return (
    <div className="formSteps__container">
      <div
        className="formSteps__stepBar"
        style={{ width: `${getBarLength()}%` }}
      ></div>
    </div>
  );
};

export default FormSteps;
