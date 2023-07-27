import React from "react";
import { useRef, useEffect, useState } from "react";
import "../DemoStyles/DemoStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import image from "../../../assets/images/logo-footer.svg";
const Sidebar = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["accessTokens"]);
  const [isSidebarClosed, setIsSidebarClosed] = useState(
    localStorage.getItem("status") === "close"
  );
  useEffect(() => {
    localStorage.setItem("status", isSidebarClosed ? "close" : "open");
  }, [isSidebarClosed]);

  const toggleSidebar = () => {
    setIsSidebarClosed((prevStatus) => !prevStatus);
  };
  const logout = () => {
    setCookie("accessTokens", "");
    console.log(cookie);
    window.localStorage.clear();
    navigate("/home");
  };
  return (
    <nav>
      <div className="logo-name">
        {/* <div className="logo-image">
          <img src={image} alt="" />
        </div> */}
        <span className="logo_name">
          <h1>AutoHome</h1>
        </span>
      </div>
      <div className="menu-items">
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">
              <i class="fa-solid fa-house "></i>
              <span className="link-name">Hall</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/kitchen">
              <i class="fa-solid fa-kitchen-set"></i>
              <span className="link-name">Kitchen</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard/room">
              <i class="fa-solid fa-bed"></i>
              <span className="link-name">Rooms</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/bathroom">
              <i class="fa-solid fa-restroom"></i>
              <span className="link-name">BathRoom</span>
            </Link>
          </li>
        </ul>

        <ul className="logout-mode">
          <li>
            <Link to="/" onClick={logout}>
              <i className="uil uil-signout"></i>
              <span className="link-name">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
