import React from "react";

import Technologies from "./technologies";

const introduction = () => {
  return (
    <div className="gray-section">
      <div className="container">
        <div className="introduction-wrapper">
          <h2>I can help.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            cursus massa. Nullam et mi condimentum, convallis erat a, lobortis
            urna. Aliquam nec sodales metus. Duis in viverra velit, nec cursus
            ipsum. In hac habitasse platea dictumst. Vivamus ex leo,
            sollicitudin a orci sit amet, finibus faucibus urna. Cras magna
            odio, commodo a sem
          </p>
        </div>
        <Technologies />
      </div>
    </div>
  );
};

export default introduction;
