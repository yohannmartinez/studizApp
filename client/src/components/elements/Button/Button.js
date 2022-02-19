import "./Button.scss";

const Button = ({ children, model, fontSize, action, style }) => {
  return (
    <button
      onClick={() => {
        action();
      }}
      className={`button__${model}`}
      style={{ fontSize: fontSize, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
