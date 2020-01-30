import React from "react";
import { ContactForm } from "./atoms";

const contact = () => {
  return (
    <div id="contact" className="gray-section padded">
      <div className="container">
        <h2 className="">Get in touch</h2>
        <p>
          Are you in need of a project, or are you looking for manpower? Get in
          touch! I'd be happy to discuss how we can help satisfy your needs.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default contact;
