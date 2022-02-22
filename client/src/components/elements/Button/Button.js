import "./Button.scss";

const Button = ({
  children,
  className,
  model,
  fontSize,
  action,
  style,
  disabled,
}) => {
  return (
    <button
      onClick={(e) => {
        action(e);
      }}
      className={`button__${model} ${className}`}
      style={{ fontSize: fontSize, ...style }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
