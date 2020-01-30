import React from "react";

// Components
import { Banner, ContactForm, GoBack } from "../components/atoms";

import mountain from "../images/mountain.jpg";

const contact = () => (
  <>
    <Banner
      bg={`linear-gradient(135deg, rgba(145, 0, 217, .88), rgba(0, 182, 227, .82)), url(${mountain})`}
      slim
    >
      <GoBack to="home" path="/" />
      <h1>Contact me</h1>
    </Banner>
    <div className="gray-section">
      <div className="container">
        <h2>Get in touch</h2>
        <p>
          Let's work together! Submit your details in this form and I will get
          back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  </>
);

export default contact;
