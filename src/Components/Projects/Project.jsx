import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  height: 50vh;
  width: 100%;
  margin: 1rem;

  border: 3px solid var(--primaryColor);
  border-radius: 25px;
`;

const StyledLink = styled.a`
  ${mixins.link}
`;

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
