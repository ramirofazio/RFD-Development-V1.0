import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container};
`;

const StyledSubContainer = styled.div`
  ${mixins.transparentContainer};

  @media (max-width: 500px) {
    height: 85%;
  }
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

  &#color {
    font-size: 1.2rem;
    color: var(--secondaryColor);

    @media (max-width: 500px) {
      font-size: 0.5rem;
    }
  }
`;

function About() {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledH1>About Me</StyledH1>
        <StyledInfoContainer>
          <StyledP>
            I am a full-stack developer located in Argentina. I have a strong
            passion for creating web applications and I am always looking for
            new challenges.
            <br />
            <br />
            Well organized and focused, I am always ready to learn new
            technologies and share my knowledge with others.
            <br />
            <br />
            Interested in the Front-End design and user interactions, I want to
            create dinamic & scalables websites. Also interested about the
            Back-End & DBs.
            <br />
            <br />
            <StyledP id="color">Lets create something amazing!</StyledP>
          </StyledP>
          <div style={{ flex: 1.2 }}></div>
        </StyledInfoContainer>
      </StyledSubContainer>
    </StyledContainer>
  );
}

export default About;
