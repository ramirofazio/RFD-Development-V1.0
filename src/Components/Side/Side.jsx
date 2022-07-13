import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import IconGitHub from "../icons/github";
import IconLinkedin from "../icons/linkedin";
import IconCalendly from "../icons/calendly";
import IconArrow from "../icons/arrow";

const StyledContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: flex-end;
  width: 5%;
  height: 100%;
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 100%;
  justify-content: center;
  transition: transform 1s ease-in-out;

  &:not(:hover) {
    transform: translateY(85%);
  }
  &:not(:hover) a:first-child {
    color: var(--secondaryColor);
    width: 35%;
    animation: jumpingArrow 3s infinite;
    animation-fill-mode: forwards;

    @keyframes jumpingArrow {
      0% {
        transform: translateY(5px);
        opacity: 1;
      }
      80% {
        opacity: 0.5;
      }
      100% {
        transform: translateY(-10px);
        opacity: 0;
      }
    }
  }
`;

const StyledLink = styled.a`
  ${mixins.link}
  width: 25%;
  color: var(--primaryDarkColor);

  margin: 2rem;

  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    color: var(--secondaryColor);
  }
`;

const StyledLine = styled.div`
  background-color: var(--primaryDarkColor);
  width: 2%;
  height: 35%;
  margin-top: 1rem;
`;

function Side() {
  return (
    <StyledContainer>
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
        <StyledLine />
      </StyledSubContainer>
    </StyledContainer>
  );
}
export default Side;
