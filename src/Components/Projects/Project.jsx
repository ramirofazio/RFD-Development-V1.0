import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  width: 30%;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  background-color: var(--baseLightColor);
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 0px var(--secondaryColor);
    background-color: var(--baseColor);
  }
  &:hover a {
    color: var(--secondaryColor);
  }

  @media (max-width: 500px) {
    width: 45%;
    height: 40%;
    margin: 5px;
  } ;
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
`;

const StyledName = styled.h1`
  margin-top: 5%;
  margin-bottom: 10%;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid var(--secondaryColor);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  color: var(--primaryColor);

  @media (min-width: 900px) {
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 100;
  text-align: center;
  color: var(--primaryDarkColor);

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const StyledTechnologiesContainer = styled.p`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 10%;
`;
const StyledTechnologies = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primaryDarkColor);
  text-align: center;
  margin-inline: 1%;

  @media (max-width: 500px) {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;

const StyledLink = styled.a`
  ${mixins.link}
  width: 15%;
  height: 10%;
  color: var(--primaryDarkColor);
  margin-top: 1rem;

  transition: all 1s ease;
  text-align: center;
`;

function Project({ name, description, link, usedTechnologies }) {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledSubContainer>
      <StyledTechnologiesContainer>
        {usedTechnologies.map((technology) => (
          <StyledTechnologies key={technology}>{technology}</StyledTechnologies>
        ))}
      </StyledTechnologiesContainer>
      <StyledLink href={link} target="_blank" rel="noreferrer">
        <IconGitHub />
      </StyledLink>
    </StyledContainer>
  );
}

export default Project;
