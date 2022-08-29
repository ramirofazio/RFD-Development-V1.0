import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-direction: column;
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40%;
`;

const StyledH1 = styled.h1`
  ${mixins.h1}

  @media (max-width: 500px) {
    font-size: ${(props) => (props.flag === true ? "1.5rem" : "3rem")};
  }
`;

const StyledP = styled.p`
  width: 50%;
  color: var(--primaryDarkColor);
  font-size: 1.5rem;
  text-align: center;
  background: var(--baseTransparentColor);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  &:hover {
    pointer-events: none;
    cursor: default;
  }
  @media (max-width: 500px) {
    width: 85%;
    font-size: ${(props) => (props.flag === true ? "1rem" : "0.8rem")};
  }
`;

const StyledButton = styled.input`
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 10px;
  background-color: var(--baseColor);
  color: var(--primaryDarkColor);
  border: 1px solid var(--primaryDarkColor);

  transition: all 0.5s linear;
  &:hover {
    cursor: pointer;
    background-color: var(--secondaryColor);
    color: var(--baseColor);
    border: none;
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

function Contact() {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <StyledH1>Contact Me</StyledH1>
        <StyledP>
          I&apos;m interested in freelance opportunities, especially ambitious
          or large projects. However, if you have other request or question,
          don&apos;t hesitate to send an E-mail!
        </StyledP>
        <a href="mailto: ramifazio@gmail.com" style={{ width: "30%" }}>
          <StyledButton type="submit" value="Send" />
        </a>
      </StyledSubContainer>
    </StyledContainer>
  );
}

export default Contact;
