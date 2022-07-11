import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";
import IconLinkedin from "../icons/linkedin";
import IconCalendly from "../icons/calendly";
import IconArrow from "../icons/arrow";

const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 5vh;
  align-items: center;
  justify-content: space-around;
  background-color: var(--baseLightColor);
  border-radius: 10px;
`;

const StyledSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const StyledLink = styled.a`
  ${mixins.link}
  width: 7%;
  color: var(--primaryDarkColor);
`;

const StyledLine = styled.div`
  background-color: var(--primaryDarkColor);
  width: 15%;
  height: 5%;
`;

function MobileSide() {
  return (
    <StyledContainer>
      <StyledLine />
      <StyledSubContainer>
        <StyledLink href="#home">
          <IconArrow />
        </StyledLink>
        <StyledLink
          href="https://calendly.com/ramifazio/30min"
          rel="noreferrer"
          target="_blank"
        >
          <IconCalendly />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/ramiro-fazio-dattoli/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin />
        </StyledLink>
        <StyledLink
          href="https://github.com/ramirofazio"
          target="_blank"
          rel="noreferrer"
        >
          <IconGitHub />
        </StyledLink>
      </StyledSubContainer>
      <StyledLine />
    </StyledContainer>
  );
}

export default MobileSide;
