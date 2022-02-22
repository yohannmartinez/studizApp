import { connect } from "react-redux";

import { logoutUser } from "../../../../actions/authActions";
import { useTranslate } from "../../../../utils/useTranslate";
import Button from "../../../elements/Button/Button";

import "./ProfileHeader.scss";

const ProfileHeader = ({ user, logoutUser }) => {
  const { t } = useTranslate();
  return (
    <>
      <div className="profileHeader__container">
        <div className="profileHeader__background">
          <div className="profileHeader__imageBackground">
            <div
              className="profileHeader__profileImage"
              style={{ backgroundImage: `url('${user.profileImage}')` }}
            ></div>
          </div>
        </div>
        <h1 className="profileHeader__userName">
          {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}{" "}
          {user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
        </h1>
        <span className="profileHeader__userPseudo">@pseudonyme</span>
        <Button
          className="profileHeader__logout"
          model={"red"}
          action={() => {
            logoutUser();
          }}
        >
          {t("LOGOUT")}
        </Button>
      </div>
    </>
  );
};

export default connect(null, { logoutUser })(ProfileHeader);
