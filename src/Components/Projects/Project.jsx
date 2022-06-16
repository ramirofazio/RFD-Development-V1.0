import React from "react";
import styled from "styled-components";
import { StyledContainer, StyledLink } from "../../styles/globalStyles.js";

function Project({ name, description, link }) {
  return (
    <ThisStyledContainer>
      <StyledLink href={link} target="_blank" rel="noreferrer">
        <h1>{name}</h1>
        <p>{description}</p>
      </StyledLink>
    </ThisStyledContainer>
  );
}

export default Project;

const ThisStyledContainer = styled(StyledContainer)`
  height: 50vh;
  width: 100%;
  margin: 1rem;

  border: 3px solid var(--primaryColor);
  border-radius: 25px;
`;
