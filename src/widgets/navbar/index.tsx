import { Link } from "react-router-dom";
import "./index.css";

const menus = [
  {
    path: "/",
    label: "Main",
  },
  {
    path: "/count",
    label: "Count",
  },
];

const Menu = () => {
  return (
    <ul className="menu-list">
      {menus.map((menu) => (
        <li className="menu-item">
          <Link to={menu.path}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <header>
      <div className="header-area">
        <h1 className="logo">Learn Zustand</h1>
      </div>
      <div className="header-area">
        <Menu />
      </div>
    </header>
  );
};

export default Navbar;
