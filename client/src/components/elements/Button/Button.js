import "./Button.scss";

const Button = ({ children, model, fontSize, action, style }) => {
  return (
    <button
      onClick={(e) => {
        action(e);
      }}
      className={`button__${model}`}
      style={{ fontSize: fontSize, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
