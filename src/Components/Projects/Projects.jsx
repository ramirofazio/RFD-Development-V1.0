import React from "react";
import { projectsData } from "./projectsData";
import Project from "./Project";
import Carousel from "react-elastic-carousel";
import { StyledCarouselContainer } from "../../styles/globalStyles";

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
