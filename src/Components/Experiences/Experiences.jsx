import React from "react";
import { experienceData } from "./experienceData";
import Experience from "./Experience";
import styled from "styled-components";
import mixins from "../../styles/mixins";

export default function Experiences() {
  return (
    <StyledContainer>
      <StyledProjectContainer data-aos="zoom-in">
        <H1 data-aos="fade-down">My Experience</H1>
        <StyledP data-aos="fade-up">
          These are some proyects that I worked on
        </StyledP>
        <StyledProjectSubContainer>
          {experienceData.map((p, index) => {
            return (
              <Experience
                key={index}
                name={p.name}
                description={p.description}
                link={p.link}
                usedTechnologies={p.usedTechnologies}
              />
            );
          })}
        </StyledProjectSubContainer>
      </StyledProjectContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${mixins.container}
  height: 100%;
  flex-direction: column;
`;

const H1 = styled.h1`
  ${mixins.h1}

  @media  (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const StyledP = styled.p`
  margin-top: 10px;
  text-align: center;
  padding: 15px;
  font-size: 1.5rem;
  color: var(--primaryDarkColor);

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const StyledProjectContainer = styled.div`
  ${mixins.transparentContainer}
`;

const StyledProjectSubContainer = styled.div`
  ${mixins.container}
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 3rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    overflow-y: scroll;
  }
`;
