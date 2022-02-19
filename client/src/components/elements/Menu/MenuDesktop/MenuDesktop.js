import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import categoriesList from "../config";
import MenuDesktopCategory from "./MenuDesktopCategory/MenuDesktopCategory";
import Logo from "../../../elements/Logo/Logo";
import { windowScrollListener } from "./utils";
import { useTranslate } from "../../../../utils/useTranslate";
import { getUserById } from "../../../../services/user";
import "./MenuDesktop.scss";

//images
import Button from "../../Button/Button";

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
          <Logo
            action={() => {
              history.push("/");
            }}
          />
          <div className="menuDesktop__leftPart__categoriesContainer">
            {categoriesList.map(
              ({
                name: categoryName,
                subMenus: categorySubMenus,
                link: CategoryLink,
              }) => (
                <MenuDesktopCategory
                  key={categoryName}
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
            <Button
              action={() => {
                history.push("/register");
              }}
              model={"basic"}
            >
              {t("REGISTER")}
            </Button>
          </div>
        )}
        {!auth.loading && auth.isAuthenticated && user && (
          <div className="menuDesktop__rightPart">
            <Button
              model={"basic"}
              action={() => {
                history.push("/profile");
              }}
            >
              {t("PROFILE")}
            </Button>
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
