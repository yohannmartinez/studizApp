import "./DecorativeCircle.scss";

/**
 * @param type can be default, border, inverse, inverseBorder
 * @param size size of the circle, default 14px
 */
const DecorativeCircle = ({ type, size, top, left, right, bottom }) => {
  return (
    <div
      className={`decorativeCircle__${type}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    ></div>
  );
};

export default DecorativeCircle;
