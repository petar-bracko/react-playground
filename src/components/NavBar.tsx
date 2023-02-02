import { NavLink } from "react-router-dom";

let activeStyle: React.CSSProperties = {
  textDecoration: "underline",
};

export const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useStateHell"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          useState Hell
        </NavLink>
      </li>
    </ul>
  </nav>
);
