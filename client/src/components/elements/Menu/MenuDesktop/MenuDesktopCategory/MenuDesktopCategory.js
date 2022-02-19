import React from "react";
import { useHistory } from "react-router-dom";

import { useTranslate } from "../../../../../utils/useTranslate";
import "./MenuDesktopCategory.scss";

//images
import { FiChevronDown } from "react-icons/fi";

const MenuDesktopCategory = ({ name, subMenus, link }) => {
  const history = useHistory();
  const { t } = useTranslate();

  return (
    <div
      className="menuDesktopCategory__categoryContainer"
      id="menuDesktop"
      onClick={() => {
        if (link) {
          history.push(link);
        }
      }}
    >
      <div className="menuDesktopCategory__categoryName">{t(name)}</div>
      {subMenus.length > 0 && (
        <div className="menuDesktopCategory__dropdownIcon">
          <FiChevronDown />
        </div>
      )}
      {subMenus.length > 0 && (
        <div className="menuDesktopCategory__subMenusContainer">
          <div className="menuDesktopCategory__subMenuswhiteContainer">
            {subMenus.map((subMenu, id) => (
              <div
                key={"submenu" + id}
                className="menuDesktopCategory__subMenu"
                onClick={() => {
                  history.push(subMenu.link);
                }}
              >
                {subMenu.icon && (
                  <div className="menuDesktopCategory__subMenuIconContainer">
                    <img
                      src={subMenu.icon}
                      className="menuDesktopCategory__subMenuIcon"
                      alt={"lien vers " + subMenu.link}
                    />
                  </div>
                )}
                <div className="menuDesktopCategory__subMenuTextContainer">
                  <div className="menuDesktopCategory__subMenuName">
                    {t(subMenu.name)}
                  </div>
                  <div className="menuDesktopCategory__subMenuDescription">
                    {t(subMenu.description)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDesktopCategory;
