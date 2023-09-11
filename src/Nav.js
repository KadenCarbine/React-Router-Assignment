import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <nav className="NavBar">
      <a><Link to="/dogs">
        Home
      </Link></a>
      <a><Link to="/dogs/whiskey">
        Whiskey
      </Link></a>
      <a><Link to="/dogs/duke">
        Duke
      </Link></a>
      <a><Link to="/dogs/perry">
        Perry
      </Link></a>
    </nav>
  );
}

export default Nav;