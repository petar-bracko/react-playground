import { NavLink } from "react-router-dom";

let activeStyle: React.CSSProperties = { color: "lime" };

export const NavBar = () => (
  <nav style={{ padding: "1rem" }}>
    <ul style={{ display: "flex", columnGap: "1rem" }}>
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
