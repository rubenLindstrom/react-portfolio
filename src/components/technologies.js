import React from "react";

import techs from "../models/technologies";

const technologies = () => {
  return (
    <div id="technologies">
      <h2>Some of the technologies we use</h2>
      <div className="tech-grid">
        {techs.map(({ img, name }) => (
          <figure key={name}>
            <img src={img} alt={name} />
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default technologies;
