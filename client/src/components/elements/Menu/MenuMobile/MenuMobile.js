import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import categoriesList from "../config";
import { setMenu } from "../../../../actions/menuActions";
import MenuMobileCategory from "./MenuMobileCategory/MenuMobileCategory";
import Logo from "../../Logo/Logo";
import "./MenuMobile.scss";

const MenuMobile = ({ menu, setMenu }) => {
  const history = useHistory();

  useEffect(() => {
    if (menu.isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!menu.isOpen) {
      document.body.style.overflow = "visible";
    }
    window.addEventListener("resize", () => {
      if (menu.isOpen && window.innerWidth > 860) {
        document.body.style.overflow = "visible";
      } else if (menu.isOpen && window.innerWidth < 860) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    });
  }, [menu.isOpen]);

  return (
    <div className="menuMobile__container">
      <Logo
        action={() => {
          history.push("/");
        }}
      />
      <RiMenu4Fill
        className="menuMobile__button"
        onClick={() => {
          setMenu(true);
        }}
      />

      <div
        className="menuMobile__menu"
        id="menu"
        style={{
          transform: menu.isOpen ? "translateX(0%)" : "translateX(100%)",
        }}
      >
        <div className="menuMobile__menu__topBar">
          <Logo
            action={() => {
              history.push("/");
            }}
          />
          <IoMdClose
            className="menuMobile__menu__closeButton"
            onClick={() => {
              setMenu(false);
            }}
          />
        </div>
        <div className="menuMobile__menu__categoriesContainer">
          {categoriesList.map((category) => (
            <MenuMobileCategory category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps, { setMenu })(MenuMobile);
