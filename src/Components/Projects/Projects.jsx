import React from "react";
import { projectsData } from "./projectsData";
import Project from "./Project";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledCarouselContainer = styled.div`
  ${mixins.carouselContainer}
`;

export default function Projects() {
  return (
    <StyledCarouselContainer>
      <Carousel
        pagination={false}
        showArrows={true}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
      >
        {projectsData.map((p, index) => {
          return (
            <Project
              key={index}
              name={p.name}
              description={p.description}
              link={p.link}
            />
          );
        })}
      </Carousel>
    </StyledCarouselContainer>
  );
}
