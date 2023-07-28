import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/styles.css";

const Navbar = () => {
  // const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  // const header = document.querySelector("[data-header]");

  // navToggleBtn.addEventListener("click", function () {
  //   header.classList.toggle("active");
  // });
  const navToggleBtnRef = useRef(null);
  // const headerRef = useRef(null);

  // navToggleBtn.addEventListener("click", function () {
  //   header.classList.toggle("active");
  // });
  useEffect(() => {
    navToggleBtnRef.current.addEventListener("click", function () {
      const header = document.querySelector("[data-header]");
      header.classList.toggle("active");
    });
  }, []);

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            {/* <img src={Logo} /> */}
            <h3>SmartHome</h3>
          </a>

          <button className="menu-toggle-btn" ref={navToggleBtnRef}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <a href="#hero" className="navbar-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="navbar-link">
                  Features
                </a>
              </li>

              <li>
                <Link to="/dashboard" className="navbar-link">
                  Dashboard
                </Link>
              </li>

              {/* <li>
                <a href="#blog" className="navbar-link">
                  Blog
                </a>
              </li> */}

              <li>
                <a href="#contact" className="navbar-link">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="header-actions">
              <Link className="header-action-link" to="/login">
                Login
              </Link>
              {/* <button className="btn btn-primary">Register</button> */}

              {/* <a href="#" className="header-action-link">
                Register
              </a> */}
              <Link className="header-action-link" to="/register">
                Register
              </Link>
              {/* <button className="btn btn-secondary">Login</button> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
