import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { setMenu } from "../../../../../actions/menuActions";
import { useTranslate } from "../../../../../utils/useTranslate";
import { FiChevronDown } from "react-icons/fi";
import "./MenuMobileCategory.scss";

const MenuMobileCategory = ({ category, menu, setMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslate();
  const history = useHistory();

  const changePage = (link) => {
    setMenu(false);
    history.push(link);
  };

  return (
    <>
      <div
        className="menuMobileCategory__container"
        onClick={() => {
          category.link ? changePage(category.link) : setIsOpen(!isOpen);
        }}
      >
        {t(category.name)}
        {!category.link && (
          <FiChevronDown
            style={{
              marginLeft: "5px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        )}
      </div>
      {isOpen &&
        category.subMenus.map((subCategory) => (
          <div
            className="menuMobileCategory__subCategory"
            onClick={() => {
              changePage(subCategory.link);
            }}
          >
            {t(subCategory.name)}
          </div>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps, { setMenu })(MenuMobileCategory);
