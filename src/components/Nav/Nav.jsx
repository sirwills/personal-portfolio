import React from "react";
// import { Link } from "react-router-dom";
import "../Nav/nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="navigations">
        <ul>
          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i class="fa-regular fa-user"></i>
            </Link>
          </li>
          <li>
            <Link to="/stacks">
              <i class="fa-solid fa-layer-group"></i>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <i class="fa-solid fa-briefcase"></i>
            </Link>
          </li>
          <li>
          <Link to="/contact">
              <i class="fa-regular fa-message"></i>
            </Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
