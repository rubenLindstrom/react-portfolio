import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
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

export const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const budgetRef = useRef(null);
  const textRef = useRef(null);

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    [nameRef, emailRef, budgetRef, textRef].forEach(
      ref => (ref.current.value = "")
    );
    setHasSubmitted(true);
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onClick={() => setHasSubmitted(false)}
    >
      <input ref={nameRef} type="text" name="name" placeholder="Name" />
      <input
        ref={emailRef}
        type="text"
        name="email"
        placeholder="Email Address"
      />
      <input
        ref={budgetRef}
        type="text"
        name="budget"
        placeholder="Budget (Optional)"
      />
      <textarea ref={textRef} placeholder="Describe your project..."></textarea>
      <button>Send Inquiry</button>
      {hasSubmitted && (
        <p style={{ color: "green" }}>
          Thanks for your inquiry! We'll get back to you shortly
        </p>
      )}
    </form>
  );
};

export const Banner = ({ bg, slim, children }) => (
  <div
    className={`banner ${slim ? "slim" : ""}`}
    style={{
      backgroundImage: bg
    }}
  >
    <div className="inner-wrapper">{children}</div>
  </div>
);

export const GoBack = ({ to, path }) => (
  <Link to={path}>
    <div className="go-back">
      <FontAwesomeIcon icon={faHandPointLeft} /> Back to {to}
    </div>
  </Link>
);
