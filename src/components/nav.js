import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SocialLinks } from "./atoms";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="bar-wrapper">
        <Link to="/">
          <h1>littleweb</h1>
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
          {/* TODO: Fix active class */}
          <li className="active">Home</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>
            <SocialLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
