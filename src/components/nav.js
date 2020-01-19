import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="bar-wrapper">
        <h1>littleweb</h1>
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
            <div id="social-icons">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
