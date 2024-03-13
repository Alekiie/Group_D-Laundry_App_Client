import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "/assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { useAuth } from "../../components/Authentication/UseAuth";
import userPhoto from "../../components/images/auth/man.png";

import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  Nav,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";

const NavBar = () => {
  const auth = useAuth();
  const [modalLive, setModalLive] = useState(false);

  // console.log(auth.user.name)
  // auth.user?console.log(auth.user.name):console.log("Not")
  const Menu = () => (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/services">Services</Link>
      </p>
      <p>
        <Link to="/cart-and-shipment">Bag</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </>
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Nav className="navigation__navbar">
      <div className="navigation__navbar-links">
        <div className="navigation__navbar-links_logo">
          <MdOutlineLocalLaundryService color="white" size={40} />
          <span>clz</span>
        </div>
        <div className="navigation__navbar-links_container">
          <Menu />
        </div>
      </div>
      <NavItem className="navigation__navbar-sign">
        {auth.user ? (
          <UncontrolledDropdown nav>
            <DropdownToggle
              aria-haspopup={true}
              caret
              color="default"
              data-toggle="dropdown"
              id="navbarDropdownMenuLink"
              nav
              onClick={(e) => e.preventDefault()}
            >
              <span>{auth.user.name}</span>
              <img
                className=""
                src={auth.user.photoURL ? auth.user.photoURL : userPhoto}
                width="35px"
                alt="user"
              />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
              <DropdownItem onClick={() => setModalLive(true)}>
                My Profile
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <Link to="/login">
            <i className="now-ui-icons users_single-02" />
            <p className="">Login</p>
          </Link>
        )}
      </NavItem>
      {/* <div className="navigation__navbar-sign">
        <button type="button">Sign Up</button>
      </div> */}
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
                <Link to="/login">
                  <i className="now-ui-icons users_single-02" />
                  <p className="">Login</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title text-danger" id="exampleModalLiveLabel">
            Email Verification
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal_email">
            Verify your email for CLZ Online Laundry Web App
          </p>
        </div>
        <div className="modal-footer">
          <Button
            color="danger"
            type="button"
            onClick={() => setModalLive(false)}
          >
            Close
          </Button>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <Button
              color="success"
              type="button"
              onClick={() => setModalLive(false)}
            >
              Go to Email Inbox
            </Button>
          </a>
        </div>
      </Modal>
    </Nav>
  );
};

export default NavBar;
