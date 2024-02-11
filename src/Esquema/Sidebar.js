import React, { useEffect } from "react";
import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  useEffect(() => {
    const hamBurger = document.querySelector(".toggle-btn");

    const handleClick = () => {
      document.querySelector("#sidebar").classList.toggle("expand");
    };

    hamBurger.addEventListener("click", handleClick);

    return () => {
      hamBurger.removeEventListener("click", handleClick);
    };
  }, []);

  const handleDropdownClick = () => {
    const sidebarDropdown = document.querySelector("#auth");
    sidebarDropdown.classList.toggle("show");
  };

  return (
    <>
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button">
            <i class="icon-menu"></i>
          </button>
          <div className="sidebar-logo">
            <Link to="#">Mi cuenta</Link>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <Link to="/perfil" className="sidebar-link">
              <i class="icon-user"></i>
              <span>Perfil</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link collapsed has-dropdown"
              onClick={handleDropdownClick}>
              <i class="icon-shopping-bag"></i>
              <span>Compras</span>

            </Link>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">Compras</Link>
              </li>
              <li className="sidebar-item">
                <Link to="#" className="sidebar-link">Favoritos</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidebar-footer">
          <Link to="#" className="sidebar-link">
            <i className="lni lni-exit"></i>
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
