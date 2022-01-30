import { connect } from "react-redux";
import { logoutUser } from "../../../../actions/authActions";
import "./ProfileHeader.scss";

const ProfileHeader = ({ user, logoutUser }) => {
  return (
    <>
      <div className="profileHeader__container">
        <div
          className="profileHeader__profileImage"
          style={{ backgroundImage: `url('${user.profileImage}')` }}
        ></div>
        <h1 className="profileHeader__userName">
          {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}{" "}
          {user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
        </h1>
        <button
          className="profileHeader__logout"
          onClick={() => {
            logoutUser();
          }}
        >
          Déconnexion
        </button>
      </div>
    </>
  );
};

export default connect(null, { logoutUser })(ProfileHeader);
