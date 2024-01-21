import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1>Tasty</h1>
        </div>
        <div className="pages">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/addPage"}>Add Page</NavLink>
          <Link>Menu</Link>
          <Link>Blog</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </div>
        <div className="menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
