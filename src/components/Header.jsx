import { useState, useRef } from "react";
import logoPic1 from "../assets/images/logoPic1.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black py-2">
      <div className="container">
        <div className="logo">
          <img className="" width="100" height="50" src={logoPic1} alt="Logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          } justify-content-end`}
          ref={mobileMenuRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Services"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/AboutUs"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
