import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-wrap: wrap;
  height: 50%;
  width: 100%;
  padding: 5px;
  align-content: space-around;
  margin-inline: 1rem;
  transition: all 0.5s ease-in;
  background-color: var(--baseLigthColor);

  outline: 1px solid red;
`;

const StyledLink = styled.a`
  ${mixins.link}
  width: 15%;
  height: 10%;
  color: var(--primaryDarkColor);

  transition: all 1s ease;
  &:hover {
    color: var(--secondaryColor);
  }

  outline: 1px solid pink;
`;

const StyledSubContainer = styled.div`
  width: 100%;
  height: 70%;

  outline: 1px solid lightskyblue;
`;

const StyledName = styled.h1`
  text-align: center;
  color: var(--primaryColor);
  font-size: 2rem;
`;

const StyledDescription = styled.p`
  text-align: center;
  color: var(--primaryDarkColor);
  font-size: large;
`;
const StyledTechnologies = styled.p`
  color: var(--primaryDarkColor);
  text-align: center;
`;

function Project({ name, description, link, usedTechnologies }) {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
        <StyledTechnologies>{usedTechnologies}</StyledTechnologies>
      </StyledSubContainer>
      <StyledLink href={link} target="_blank" rel="noreferrer">
        <IconGitHub />
      </StyledLink>
    </StyledContainer>
  );
}

export default Project;
