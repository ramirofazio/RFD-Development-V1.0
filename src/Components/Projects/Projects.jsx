import React from "react";
import { projectsData } from "./projectsData";
import Project from "./Project";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
`;

const StyledProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 55vw;
  height: 90vh;
  padding: 10px;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export default function Projects() {
  return (
    <StyledContainer>
      <StyledProjectContainer>
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
      </StyledProjectContainer>
    </StyledContainer>
  );
}
