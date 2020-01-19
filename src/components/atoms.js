import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const SocialLinks = () => (
  <div className="social-links">
    <a
      href="https://www.linkedin.com/in/ruben-lindstr%C3%B6m-412442160/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      href="https://github.com/rubenLindstrom"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="mailto:ruben.lindstrom@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>
);
