import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

function Home() {
  return (
    <StyledContainer>
      <SubContainer>
        {/* <Intro>Hi, my name is</Intro> */}
        <Name>Ramiro Fazio Dattoli.</Name>
        {/* <P>Developing high quality sofware </P> */}
        <Intro>LINK A MERCADO SHOPS</Intro>
        <P href="https://ramirofazio.mercadoshops.com.ar" target="_blank">
          ¡ACA!
        </P>
      </SubContainer>
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  ${mixins.container}
`;

const SubContainer = styled.div`
  width: 70%;
  height: 50vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    cursor: default;
  }
`;

const Intro = styled.h1`
  color: var(--secondaryColor);
  font-weight: 200;
  font-size: 2.5rem;
  width: 100%;
  height: auto;
  background: var(--baseTransparentColor);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  text-align: center;

  &:hover {
    cursor: default;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Name = styled.h1`
  width: 100%;
  height: auto;
  color: var(--primaryColor);
  font-family: var(--secondaryFont);
  font-size: 5.5rem;

  transition: all 2s ease;
  &:hover {
    cursor: default;
    color: var(--secondaryColor);
  }

  @media (max-width: 500px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;

const P = styled.a`
  margin: 0;
  color: var(--primaryDarkColor);
  font-size: 2rem;
  background: var(--baseTransparentColor);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  border: 1px solid var(--secondaryColor);
  border-radius: 15px;
  text-align: center;
  text-decoration: none;

  transition: all 0.5s ease;

  &:hover {
    color: black;
    background-color: var(--primaryColor);
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;
