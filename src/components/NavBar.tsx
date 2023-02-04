import { NavLink } from "react-router-dom";

const activeStyle: React.CSSProperties = { color: "lime" };

const setActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeStyle : undefined;

export const NavBar = () => (
  <nav style={{ padding: "1rem" }}>
    <ul style={{ display: "flex", columnGap: "1rem" }}>
      <li>
        <NavLink to="/" style={setActiveNavLink}>
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink to="/useStateHell" style={setActiveNavLink}>
          useState Hell
        </NavLink>
      </li>
      <li>
        <NavLink to="/contextConsumer" style={setActiveNavLink}>
          Context consumer
        </NavLink>
      </li>
      <li>
        <NavLink to="/contextMutator" style={setActiveNavLink}>
          Context mutator
        </NavLink>
      </li>
      <li>
        <NavLink to="/reducer" style={setActiveNavLink}>
          Using reducer
        </NavLink>
      </li>
    </ul>
  </nav>
);
