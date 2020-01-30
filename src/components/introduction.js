import React from "react";

import Technologies from "./technologies";

const introduction = () => {
  return (
    <div className="gray-section">
      <div className="container">
        <div className="introduction-wrapper">
          <h2>I can help.</h2>
          <p>
            Originating in a passion for web development, I've always sought the
            most efficient way of developing through the help of modern
            solutions, while not compromising on quality.
            <br />
            <br />
            There are many ways to build a website in the wrong way, but only a
            few to do it right. If you want a website that will be a tool in
            your growth, will stand the test of time and ensure that the golden
            oppotunity of the first impression is seized, dont wait with sending
            us a message.
          </p>
        </div>
        <Technologies />
      </div>
    </div>
  );
};

export default introduction;
