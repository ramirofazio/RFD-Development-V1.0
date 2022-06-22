import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  flex-direction: column;
`;

const StyledInputContainer = styled(StyledContainer)`
  width: 60%;
  height: 10%;

  outline: 1px solid green;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  height: 50%;

  outline: 1px solid pink;
`;

const StyledLabel = styled.label`
  color: var(--primaryColor);
`;

const StyledInput = styled.input`
  width: 90%;
  height: 50%;
  border-radius: 15px;
  text-align: center;
  background-color: var(--primaryColor);

  &:focus {
    border: none;
    outline: none;
    height: 50%;
  }
`;

const StyledTextAreaContainer = styled(StyledInputContainer)`
  outline: 1px solid red;

  height: 30%;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  min-height: 40%;
  border-radius: 15px;
  text-align: center;
  background-color: var(--primaryColor);
`;
const StyledButton = styled.input`
  width: 20%;
  height: 2rem;
  border-radius: 5px;
  border: 1.5px solid var(--primaryDarkColor);
  background-color: var(--baseColor);
  color: var(--primaryDarkColor);

  transition: all 1.5s ease;
  &:hover {
    background-color: var(--primaryDarkColor);
    color: var(--baseColor);
    border: 1.5px solid var(--baseColor);
  }
`;

const StyledCalendlyButton = styled.a`
  width: 20%;
  height: 2rem;
  border-radius: 5px;
  border: 1.5px solid var(--primaryDarkColor);
  background-color: var(--baseColor);
  color: var(--primaryDarkColor);

  transition: all 1.5s ease;
  &:hover {
    background-color: var(--primaryDarkColor);
    color: var(--baseColor);
    border: 1.5px solid var(--baseColor);
  }
`;

function Contact() {
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <StyledContainer>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <StyledInputContainer>
          <StyledLabel>Full Name</StyledLabel>
          <StyledInput
            type="text"
            name="clientFullName"
            placeholder="Full Name"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="email" name="clientEmail" placeholder="Email" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Celphone</StyledLabel>
          <StyledInput
            type="text"
            name="clientCelphone"
            placeholder="Celphone"
          />
        </StyledInputContainer>
        <StyledTextAreaContainer>
          <StyledLabel>Message</StyledLabel>
          <StyledTextArea name="clientMessage" placeholder="Your Message" />
        </StyledTextAreaContainer>
        <StyledButton type="submit" value="Send" />
      </StyledForm>
      <StyledCalendlyButton
        href="https://calendly.com/ramifazio/30min"
        rel="noreferrer"
        target="_blank"
      >
        <button>calendly</button>
      </StyledCalendlyButton>
      <a href="https://github.com/ramirofazio" rel="noreferrer" target="_blank">
        <img src="https://img.icons8.com/material-outlined/24/000000/github.png" />
      </a>
      <a
        href="https://www.linkedin.com/in/ramiro-fazio-dattoli/"
        rel="noreferrer"
        target="_blank"
      >
        <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png" />
      </a>
      <a
        href="https://drive.google.com/drive/folders/1VTwnR9GBwnugsJ0-q_TJK9cipyw7jh4c?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        <img src="https://img.icons8.com/material-outlined/24/000000/parse-resume.png" />
      </a>
    </StyledContainer>
  );
}

export default Contact;
