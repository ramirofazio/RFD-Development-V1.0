import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../styles/globalStyles.js";

function Home() {
  return (
    <StyledContainer>
      <Container>
        <div>
          <Title>Hello, my name is</Title>
          <Name>Ramiro Fazio Dattoli.</Name>
        </div>
        <Title>I buld thing for the web.</Title>
      </Container>
    </StyledContainer>
  );
}

export default Home;

const Container = styled.div`
  width: 50%;
  height: 40%;
  outline: 1px solid red;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--secondaryColor);
  font-family: var(--principalFont);
  font-weight: 800;
`;

const Name = styled.h1`
  margin-inline: 1rem;

  color: var(--primaryDarkColor);
  font-family: var(--secondaryFont);
`;
