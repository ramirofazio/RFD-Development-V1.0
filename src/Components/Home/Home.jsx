import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
`;

const SubContainer = styled.div`
  padding: 50px;
`;

const Intro = styled.h1`
  margin: 0;
  color: var(--secondaryColor);
  font-family: var(--principalFont);
  font-weight: 200;
  font-size: 1.5rem;
`;

const Name = styled.h1`
  color: var(--primaryColor);
  font-family: var(--secondaryFont);
  font-size: 4.5rem;
  margin: 0;

  transition: all 3s ease;
  &:hover {
    color: var(--secondaryColor);
  }
`;

const P = styled(Intro)`
  margin: 0;
  color: var(--primaryDarkColor);
  font-size: 3rem;
`;

function Home() {
  return (
    <StyledContainer>
      <SubContainer>
        <Intro>Hi, my name is</Intro>
        <Name>Ramiro Fazio Dattoli.</Name>
        <P>I build thing for the web.</P>
      </SubContainer>
    </StyledContainer>
  );
}

export default Home;
