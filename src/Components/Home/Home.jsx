import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
`;

const SubContainer = styled.div`
  padding: 5%;

  &:hover {
    cursor: default;
  }
`;

const Intro = styled.h1`
  margin: 0;
  color: var(--secondaryColor);
  font-family: var(--principalFont);
  font-weight: 200;
  font-size: 2.5 rem;
  &:hover {
    cursor: default;
  }
`;

const Name = styled.h1`
  color: var(--primaryColor);
  font-family: var(--secondaryFont);
  font-size: 5.5rem;
  margin: 0;

  transition: all 2s ease;
  &:hover {
    cursor: default;
    color: var(--secondaryColor);
  }
`;

const P = styled(Intro)`
  margin: 0;
  color: var(--primaryDarkColor);
  font-size: 2rem;

  &:hover {
    cursor: default;
  }
`;

function Home() {
  return (
    <StyledContainer>
      <SubContainer>
        <Intro>Hi, my name is</Intro>
        <Name>Ramiro Fazio Dattoli.</Name>
        <P>Developing high quality sofware </P>
      </SubContainer>
    </StyledContainer>
  );
}

export default Home;
