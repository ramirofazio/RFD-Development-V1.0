import React from "react";
import { StyledContainer, StyledLink } from "../../styles/globalStyles.js";

function Project({ name, description, link }) {
  return (
    <StyledContainer>
      <StyledLink href={link} target="_blank" rel="noreferrer">
        <h1>{name}</h1>
        <p>{description}</p>
      </StyledLink>
    </StyledContainer>
  );
}

export default Project;

