import "./Loading.scss";

/**
 *
 * @param {String} backgroundColor color of the loader container background
 * @param {String} borderColor color of the loader
 * @returns
 */
const Loading = (backgroundColor, borderColor) => {
  return (
    <div className="loading__container" style={{}}>
      <div className="loading__loaderContainer"></div>
    </div>
  );
};

export default Loading;
