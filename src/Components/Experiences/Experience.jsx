import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";

const StyledContainer = styled.div`
  ${mixins.container}
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  height: 40%;
  min-width: 30%;
  max-width: 30%;
  margin-inline: 1rem;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  background-color: var(--baseColor);
  box-shadow: 0px 10px 0px var(--secondaryColor);
  &:hover {
    box-shadow: 0px 0px 0px var(--primaryDarkColor);
  }
  &:hover a {
    color: var(--secondaryColor);
  }

  &:hover p {
    color: var(--primaryDarkColor);
  }

  @media (max-width: 500px) {
    margin-inline: 0;
    min-width: 100%;
    margin-bottom: 2.5rem;
    min-height: 30%;
  }
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
`;

const StyledName = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 10%;
  width: 100%;
  min-height: 20%;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid var(--secondaryColor);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  color: var(--primaryColor);

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const StyledDescription = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 100;
  text-align: center;
  color: var(--primaryDarkColor);
  max-width: 75%;
  margin: auto;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const StyledTechnologiesContainer = styled.p`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  height: 10%;
`;
const StyledTechnologies = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondaryColor);
  text-align: center;
  margin-inline: 1%;
  transition: all 1s ease;

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

function Experience({ name, description, link, usedTechnologies }) {
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

export default Experience;
