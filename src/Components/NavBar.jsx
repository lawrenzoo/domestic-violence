import '../App.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav>
        <div className="logo">
        <NavLink to="/" end className="nav-link">
              <img src="/assets/Dv-logo.svg" alt="logo" />
            </NavLink>
        </div>
        <div className={`nav-optimize ${menuOpen ? "show" : "unshow"}`}>
          <ul>
          <li>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/get-help" className="nav-link">
              Get Help
            </NavLink>
          </li>
          <li>
            <NavLink to="/consult" className="nav-link">
              Consult
            </NavLink>
          </li>
          <li>
            <NavLink to="/support-others" className="nav-link">
              Support Others
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="nav-btn">
          <button className="btn-one">Donate Now</button>
          <button className="btn-two">Share Story</button>
        </div>
        </div>
        <div className="burger-times" onClick={toggleMenu}>
  {!menuOpen ? (
    <img className="burger" src="/assets/burger-menu-left-svgrepo-com.svg" alt="burger" />
  ) : (
    <img
      className="times rotate"
      src="/assets/times-svgrepo-com.svg"
      alt="times"
    />
  )}
</div>
        
      </nav>
    </>
  );
};

export default NavBar;
