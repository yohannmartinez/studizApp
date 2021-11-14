import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import categoriesList from "../config";
import MenuDesktopCategory from "./MenuDesktopCategory/MenuDesktopCategory";
import { windowScrollListener } from "./utils";
import { useTranslate } from "../../../../utils/useTranslate";
import { getUserById } from "../../../../services/user";
import "./MenuDesktop.scss";

//images
import Logo from "../../../../assets/pictures/logo_base.svg";

const MenuDesktop = ({ backgroundColor, auth }) => {
  const history = useHistory();
  const { t } = useTranslate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    windowScrollListener(backgroundColor);
    async function getUser() {
      if (auth.isAuthenticated) {
        let retrievedUser = await getUserById(auth.user._id);
        setUser(retrievedUser.data.user);
      }
    }
    getUser();
  }, []);

  return (
    <div
      className="menuDesktop__background"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="menuDesktop__container" id="menuDesktop">
        <div className="menuDesktop__leftPart">
          <img
            src={Logo}
            alt="studiz logo"
            className="menuDesktop__leftPart__logo"
          />
          <div className="menuDesktop__leftPart__logoText">Studiz</div>
          <div className="menuDesktop__leftPart__categoriesContainer">
            {categoriesList.map(
              ({
                name: categoryName,
                subMenus: categorySubMenus,
                link: CategoryLink,
              }) => (
                <MenuDesktopCategory
                  name={categoryName}
                  subMenus={categorySubMenus}
                  link={CategoryLink}
                />
              )
            )}
          </div>
        </div>
        {!auth.loading && !auth.isAuthenticated && !user && (
          <div className="menuDesktop__rightPart">
            <button
              className="menuDesktop__rightPart__logInButton"
              onClick={() => {
                history.push("/login");
              }}
            >
              {t("LOGIN")}
            </button>
            <button
              className="menuDesktop__rightPart__registerButton"
              onClick={() => {
                history.push("/register");
              }}
            >
              {t("REGISTER")}
            </button>
          </div>
        )}
        {!auth.loading && auth.isAuthenticated && user && (
          <div className="menuDesktop__rightPart">
            <button
              className="menuDesktop__rightPart__registerButton"
              onClick={() => {
                history.push("/profile");
              }}
            >
              {t("PROFILE")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  language: state.language,
});

export default connect(mapStateToProps, null)(MenuDesktop);
