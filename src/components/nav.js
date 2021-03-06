import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SocialLinks } from "./atoms";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="bar-wrapper">
        <Link to="/">
          <h1>CodeJoy AB</h1>
        </Link>
        <div
          id="hamburger"
          className={open ? "open" : ""}
          onClick={() => setOpen(prevState => !prevState)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="nav-content" className={open ? "open" : ""}>
        <ul>
          <li className="active">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/#projects">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <SocialLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
