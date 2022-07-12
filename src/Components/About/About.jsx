import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container};
`;

const StyledSubContainer = styled.div`
  ${mixins.transparentContainer};
`;

const StyledH1 = styled.h1`
  ${mixins.h1}

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 1rem;
`;

const StyledP = styled.p`
  flex: 1;
  text-align: center;
  padding: 15px;
  font-size: 1.5rem;
  color: var(--primaryDarkColor);

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

function About() {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledH1>About Me</StyledH1>
        <StyledInfoContainer>
          <StyledP>
            Mi name is Ramiro Fazio Dattoli. Im a big enthusiastic about
            technology since I touch my first PC. With Henry on 2021 I
            discovered my passion, I have great leadership skills and think that
            teamwork is essential for achieving better results in less time.
            Also, Im a very flexible person, multitasking, and can learn
            technologies to solve problems, quickly and effectively.
          </StyledP>
          <div style={{ flex: 1.2 }}></div>
        </StyledInfoContainer>
      </StyledSubContainer>
    </StyledContainer>
  );
}

export default About;
