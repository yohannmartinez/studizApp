import { connect } from "react-redux";
import { useHistory } from "react-router";
import { FaShare, FaInfoCircle } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

import "./SideButtons.scss";

const SideButtons = ({ lesson, auth }) => {
  const history = useHistory();
  const isLessonOwner =
    auth && auth.isAuthenticated && auth.user._id === lesson.userId;

  const handleAlert = () => {
    alert("Cette fonctionnalité est en cours d'implémentation");
  };
  return (
    <div className="lessonDetails__sideButtons__container">
      <div
        className="lessonDetails__sideButtons__creatorImage"
        style={{
          backgroundImage: `url('${lesson.creator.profileImage}')`,
        }}
        onClick={() => {
          history.push(`/user/${lesson.creator._id}`);
        }}
      ></div>
      <div
        className="lessonDetails__sideButtons__button"
        onClick={() => {
          handleAlert();
        }}
      >
        <FaShare />
      </div>
      <div
        className="lessonDetails__sideButtons__button"
        onClick={() => {
          handleAlert();
        }}
      >
        <FaInfoCircle />
      </div>
      {isLessonOwner && (
        <div
          className="lessonDetails__sideButtons__button"
          onClick={() => {
            handleAlert();
          }}
        >
          <RiDeleteBin7Fill />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(SideButtons);
