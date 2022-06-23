import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container};
  flex-direction: column;
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;

  outline: 1px solid red;
`;
const StyledH1 = styled.h1`
  color: var(--primaryColor);
`;
const StyledP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: var(--primaryDarkColor);
`;

function About() {
  return (
    <StyledContainer>
      <StyledH1>About Me</StyledH1>
      <StyledSubContainer>
        <StyledP>
          Mi name is Ramiro Fazio Dattoli. Im a big enthusiastic about
          technology since I touch my first PC. With Henry on 2021 I discovered
          my passion, I have great leadership skills and think that teamwork is
          essential for achieving better results in less time. Also, Im a very
          flexible person, multitasking, and can learn technologies to solve
          problems, quickly and effectively.
        </StyledP>
      </StyledSubContainer>
    </StyledContainer>
  );
}

export default About;
