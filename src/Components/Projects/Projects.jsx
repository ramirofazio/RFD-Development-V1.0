import React from "react";
import { projectsData } from "./projectsData";
import Project from "./Project";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  height: 100%;
  flex-direction: column;
`;

const H1 = styled.h1`
  ${mixins.h1}
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
  margin-top: 5rem;
`;

export default function Projects() {
  return (
    <StyledContainer>
      <StyledProjectContainer>
        <H1>My Experience</H1>
        <StyledProjectSubContainer>
          {projectsData.map((p, index) => {
            return (
              <Project
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
