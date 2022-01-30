import { useState } from "react";
import ChangePassword from "../../../elements/ChangePassword/ChangePassword";
import "./UserInfos.scss";

const UserInfos = ({ user }) => {
  const [editPassword, setEditPassword] = useState(false);

  return (
    <div className="userInfos__container">
      <h1 className="userInfos__sectionTitle">Informations principales</h1>
      <div className="userInfos__flexContainer">
        <div className="userInfos__flexElement">
          <div className="userInfos__label">Prénom</div>
          <div className="userInfos__value">{user.firstname}</div>
          <div className="userInfos__label">Nom</div>
          <div className="userInfos__value">{user.lastname}</div>
          <div className="userInfos__label">Email</div>
          <div className="userInfos__value">{user.email}</div>
        </div>
        <div className="userInfos__flexElement">
          <div className="userInfos__label">Email Vérifié</div>
          <div className="userInfos__value">
            {user.emailChecked ? "oui" : "non"}
          </div>
          <div className="userInfos__label">Numéro de téléphone</div>
          <div className="userInfos__value">{user.phoneNumber}</div>
          <div className="userInfos__label">Code de parrainage</div>
          <div className="userInfos__value">{user.sponsorCode}</div>
        </div>
      </div>

      <div className="userInfos__sectionSeparator"></div>
      <h1 className="userInfos__sectionTitle">Mot de passe</h1>
      <button
        className="userInfos__button"
        onClick={() => {
          setEditPassword(true);
        }}
      >
        Changer mon mot de passe
      </button>

      {editPassword && (
        <ChangePassword
          userId={user._id}
          onCancel={() => {
            setEditPassword(false);
          }}
        />
      )}
    </div>
  );
};

export default UserInfos;
