import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-direction: column;
  flex-wrap: wrap;
  height: 50%;
  width: 100%;
  padding: 15px;
  align-content: space-around;
  margin-inline: 1rem;
  transition: all 0.5s ease-in;
  background-color: var(--baseLigthColor);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 1px var(--secondaryColor);
  }
`;

const StyledLink = styled.a`
  ${mixins.link}
  width: 15%;
  height: 10%;
  color: var(--primaryDarkColor);
  margin-top: 1rem;

  transition: all 1s ease;
  &:hover {
    color: var(--secondaryColor);
  }
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 100%;
  height: 60%;
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
      </StyledSubContainer>
      <StyledTechnologies>{usedTechnologies}</StyledTechnologies>
      <StyledLink href={link} target="_blank" rel="noreferrer">
        <IconGitHub />
      </StyledLink>
    </StyledContainer>
  );
}

export default Project;
