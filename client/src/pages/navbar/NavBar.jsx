import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineLocalLaundryService } from "react-icons/md";

const NavBar = () => {
  const Menu = () => (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/services">Services</Link>
      </p>
      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </>
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navigation__navbar">
      <div className="navigation__navbar-links">
        <div className="navigation__navbar-links_logo">
          <MdOutlineLocalLaundryService color="white" size={40} />
          <span>clz</span>
        </div>
        <div className="navigation__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navigation__navbar-sign">
        <button type="button">Sign Up</button>
      </div>
      <div className="navigation__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={26}
            color="#ffff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={26}
            color="#ffff"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navigation__navbar-menu_container scale-up-center">
            <div className="navigation__navbar-menu_contaner-links">
              <Menu />
              <div className="navigation__navbar-menu_container-links-sign">
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
