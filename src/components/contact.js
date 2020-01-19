import React from "react";

const contact = () => {
  return (
    <div id="contact">
      <h2>Get in touch</h2>
      <p>
        Are you in need of a project, or are you looking for manpower? Get in
        touch! I'd be happy to discuss how we can help satisfy your needs.
      </p>
      <form>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="text" name="email" id="" placeholder="Email Address" />
        <input
          type="text"
          name="budget"
          id=""
          placeholder="Budget (Optional)"
        />
        <textarea placeholder="Describe your project..."></textarea>
        <button>Send Inquiry</button>
      </form>
    </div>
  );
};

export default contact;
