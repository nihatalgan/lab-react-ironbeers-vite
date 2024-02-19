import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink
        style={{ fontSize: "2rem" }}
        to={"/"}
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Home
      </NavLink>
    </nav>
  );
}

export default Navbar;
