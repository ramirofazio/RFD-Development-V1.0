import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 80%;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--baseLightColor);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 500px) {
    width: 90%;
    height: 80%;
  }
`;

const StyledSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 40%;
`;

const StyledH1 = styled.h1`
  text-align: center;
  color: var(--secondaryColor);
  font-family: var(--secondaryFont);
  font-size: 4rem;
  font-weight: 200;
  border-bottom: 1px solid var(--secondaryColor);

  &:hover {
    pointer-events: none;
    cursor: default;
  }

  @media (max-width: 500px) {
    font-size: ${(props) => (props.flag === true ? "1.5rem" : "3rem")};
  }
`;

const StyledP = styled.p`
  width: 70%;
  color: var(--primaryDarkColor);
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: ${(props) => (props.flag === true ? "1rem" : "0rem")};

  &:hover {
    pointer-events: none;
    cursor: default;
  }
  @media (max-width: 500px) {
    width: 85%;
    font-size: ${(props) => (props.flag === true ? "1rem" : "0.8rem")};
  }
`;

const StyledInputContainer = styled.div`
  height: 60%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInputSubContainer = styled.div`
  ${mixins.container}
  width: 90%;
  height: 15%;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 60%;
  text-align: center;
  border: none;
  border-bottom: 1px solid var(--primaryDarkColor);
  background-color: var(--baseLightColor);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--primaryDarkColor);
  font-size: 1.2rem;
  font-family: var(--primaryFont);
  transition: all 0.5s linear;
  &:focus,
  &:not(:focus):valid {
    outline: none;
    border-bottom: 1px solid var(--secondaryColor);
    animation: borderBottom 1s ease;
  }
  @keyframes borderBottom {
    0% {
      border-bottom: 1px solid var(--primaryDarkColor);
    }
    25% {
      width: 0%;
    }
    50% {
      width: 90%;
    }
    100% {
      border-bottom: 1px solid var(--secondaryColor);
    }
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 1rem;
    color: var(--secondaryColor);
    left: 31%;
    transform: translateY(-1.5rem);
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  @media (max-width: 500px) {
    font-size: 1rem;
    &:focus ~ label,
    &:not(:focus):valid ~ label {
      font-size: 0.7rem;
      left: 25%;
      transform: translateY(-1rem);
    }
  }
`;
const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: var(--primaryDarkColor);
  position: absolute;
  transition: transform 1s ease;
  pointer-events: none;
`;

const StyledTextAreaContainer = styled(StyledInputSubContainer)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: flex-start;
`;

const StyledTextArea = styled.textarea`
  max-width: 90%;
  min-width: 90%;
  min-height: 40%;
  border: none;
  border-bottom: 1px solid var(--primaryDarkColor);
  text-align: center;
  background-color: var(--baseLightColor);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 1.2rem;
  color: var(--primaryDarkColor);
  font-family: var(--primaryFont);

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--secondaryColor);
    animation: borderBottom 1s ease;
  }
  @keyframes borderBottom {
    0% {
      border-bottom: 1px solid var(--primaryDarkColor);
    }
    25% {
      max-width: 0%;
      min-width: 0%;
    }
    50% {
      max-width: 90%;
      min-width: 90%;
    }
    100% {
      border-bottom: 1px solid var(--secondaryColor);
    }
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 1rem;
    color: var(--secondaryColor);
    left: 31%;
    transform: translateY(-1.5rem);
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    &:focus ~ label,
    &:not(:focus):valid ~ label {
      font-size: 0.7rem;
      left: 25%;
      transform: translateY(-1rem);
    }
  }
`;

const StyledButton = styled.input`
  text-align: center;
  font-size: 1.2rem;
  width: ${(props) => (props.flag === true ? "auto" : "20%")};
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  background-color: var(--baseColor);
  color: var(--primaryDarkColor);

  transition: all 0.5s linear;
  &:hover {
    cursor: pointer;
    background-color: var(--secondaryColor);
    color: var(--baseColor);
    border: none;
  }

  @media (max-width: 500px) {
    width: 40%;
    font-size: 0.9rem;
  }
`;

const StyledThanksContainer = styled(StyledContainer)`
  background-color: var(--baseLightColor);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 50%;
  height: 50%;
  border-radius: 10px;
`;

function Contact() {
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const [flag, setFlag] = useState(true);

  const sendEmail = (event) => {
    event.preventDefault();
    setFlag(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    form.current.reset();
  };

  if (flag) {
    return (
      <StyledThanksContainer>
        <StyledH1 flag={flag}>Thanks for contacting me!</StyledH1>
        <StyledP flag={flag}>Want to send another email?</StyledP>
        <StyledButton
          value="Send another email"
          onClick={() => setFlag(false)}
          flag={flag}
        />
      </StyledThanksContainer>
    );
  } else {
    return (
      <StyledContainer>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledSubContainer>
            <StyledH1>Contact Me</StyledH1>
            <StyledP>
              I&apos;m interested in freelance opportunities, especially
              ambitious or large projects. However, if you have other request or
              question, don&apos;t hesitate to use the form.
            </StyledP>
          </StyledSubContainer>
          <StyledInputContainer>
            <StyledInputSubContainer>
              <StyledInput type="text" name="clientFullName" required />
              <StyledLabel>Full Name</StyledLabel>
            </StyledInputSubContainer>
            <StyledInputSubContainer>
              <StyledInput type="email" name="clientEmail" required />
              <StyledLabel>Email</StyledLabel>
            </StyledInputSubContainer>
            <StyledInputSubContainer>
              <StyledInput type="number" name="clientCelphone" required />
              <StyledLabel>Celphone</StyledLabel>
            </StyledInputSubContainer>
            <StyledTextAreaContainer>
              <StyledTextArea name="clientMessage" required />
              <StyledLabel>Message</StyledLabel>
            </StyledTextAreaContainer>
            <StyledButton type="submit" value="Send" />
          </StyledInputContainer>
        </StyledForm>
      </StyledContainer>
    );
  }
}

export default Contact;
