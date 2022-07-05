import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-direction: column;

  &:hover {
    pointer-events: none;
    cursor: default;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 80%;
  border: 1px solid var(--primaryDarkColor);
  border-radius: 10px;
  padding: 2rem;
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
`;

const StyledP = styled.p`
  width: 70%;
  color: var(--primaryDarkColor);
  font-size: 1.5rem;
  text-align: center;

  &:hover {
    pointer-events: none;
    cursor: default;
  }
`;

const StyledInputContainer = styled.div`
  ${mixins.container}
  width: 50%;
  height: 10%;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 50%;
  text-align: center;
  background-color: var(--baseColor);
  border: none;
  border-bottom: 1px solid var(--primaryDarkColor);
  color: var(--primaryDarkColor);
  font-size: 1.2rem;
  font-family: var(--primaryFont);
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 1rem;
    color: var(--secondaryColor);
    left: 36%;
    transform: translateY(-1.5rem);
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: var(--primaryDarkColor);
  position: absolute;
  transition: transform 1s ease;
  pointer-events: none;
`;

const StyledTextAreaContainer = styled(StyledInputContainer)`
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
  background-color: var(--baseColor);
  font-size: 1.2rem;
  color: var(--primaryDarkColor);
  font-family: var(--primaryFont);

  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    font-size: 1rem;
    color: var(--secondaryColor);
    left: 36%;
    transform: translateY(-1.5rem);
  }
`;
const StyledButton = styled.input`
  text-align: center;
  font-size: 1.2rem;
  width: 20%;
  height: 2.5rem;
  border-radius: 10px;
  border: 1.5px solid var(--primaryDarkColor);
  background-color: var(--baseColor);
  color: var(--primaryDarkColor);

  transition: all 0.5s linear;
  &:hover {
    cursor: pointer;
    background-color: var(--secondaryColor);
    color: var(--baseColor);
    border: 1.5px solid var(--baseColor);
  }
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
      <StyledContainer>
        <StyledH1>Thanks for contacting me!</StyledH1>
        <StyledP>Want to send another email?</StyledP>
        <StyledButton
          value="Send another email"
          onClick={() => setFlag(false)}
        />
      </StyledContainer>
    );
  } else {
    return (
      <StyledContainer>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledH1>Contact Me</StyledH1>
          <StyledP>
            I&apos;m interested in freelance opportunities, especially ambitious
            or large projects. However, if you have other request or question,
            don&apos;t hesitate to use the form.
          </StyledP>
          <StyledInputContainer>
            <StyledInput type="text" name="clientFullName" required />
            <StyledLabel>Full Name</StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledInput type="email" name="clientEmail" required />
            <StyledLabel>Email</StyledLabel>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledInput type="number" name="clientCelphone" required />
            <StyledLabel>Celphone</StyledLabel>
          </StyledInputContainer>
          <StyledTextAreaContainer>
            <StyledTextArea name="clientMessage" required />
            <StyledLabel>Message</StyledLabel>
          </StyledTextAreaContainer>
          <StyledButton type="submit" value="Send" />
        </StyledForm>
      </StyledContainer>
    );
  }
}

export default Contact;
