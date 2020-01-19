import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footer = () => {
  return (
    <footer>
      <h4>littleweb</h4>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ruben-lindstr%C3%B6m-412442160/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/rubenLindstrom" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:ruben.lindstrom@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default footer;
