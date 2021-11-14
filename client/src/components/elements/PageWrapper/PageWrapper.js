import "./PageWrapper.scss";

const PageWrapper = ({ children }) => {
  return (
    <div className="pageWrapper__globalContainer">
      <div className="pageWrapper__container">{children}</div>
    </div>
  );
};

export default PageWrapper;
