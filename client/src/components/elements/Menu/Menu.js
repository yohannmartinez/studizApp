import "./Menu.scss";
import MenuDesktop from "./MenuDesktop/MenuDesktop";
import MenuMobile from "./MenuMobile/MenuMobile";

const Menu = ({ backgroundColor }) => {
  return (
    <div className="menu__globalContainer">
      <div className="menu__desktop__globalContainer">
        <MenuDesktop backgroundColor={backgroundColor} />
      </div>
      <div className="menu__mobile__globalContainer">
        <MenuMobile backgroundColor={backgroundColor} />
      </div>
    </div>
  );
};

export default Menu;
