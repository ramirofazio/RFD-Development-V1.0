import React from "react";
//import { StyledContainer } from "../../styles/globalStyles.js";

function Project({ name, description, link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <h1>{name}</h1>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Project;
