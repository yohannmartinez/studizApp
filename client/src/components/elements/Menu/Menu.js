import "./Menu.scss";
import MenuDesktop from "./MenuDesktop/MenuDesktop";

const Menu = ({ backgroundColor }) => {
  return (
    <div className="menu__globalContainer">
      <div className="menu__desktop__globalContainer">
        <MenuDesktop backgroundColor={backgroundColor} />
      </div>
      <div className="menu__mobile__globalContainer">mobile</div>
    </div>
  );
};

export default Menu;
