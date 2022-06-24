import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-wrap: wrap;
  height: 50%;
  width: 100%;
  padding: 10px;
  align-items: flex-start;
  margin-inline: 1rem;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: var(--hover);
  }

  outline: 1px solid red;
`;

const StyledLink = styled.a`
  ${mixins.link}

  color: var(--primaryDarkColor);
  outline: 1px solid blue;
  transition: all 1s ease;
  &:hover {
  }
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
