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

  outline: 1px solid black;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  height: 50%;

  outline: 1px solid red;
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
`;

const StyledTextArea = styled.textarea`
  max-width: 90%;
  height: 50%;
  border-radius: 15px;
  text-align: center;
  background-color: var(--primaryColor);
`;
const StyledButton = styled.input`
  background-color: var(--primaryDarkColor);
  color: var(--primaryColor);
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
          <StyledInput type="text" name="clientFullName" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="email" name="clientEmail" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Celphone</StyledLabel>
          <StyledInput type="number" name="clientCelphone" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Message</StyledLabel>
          <StyledTextArea name="clientMessage" />
        </StyledInputContainer>
        <StyledButton type="submit" value="Send" />
      </StyledForm>
      <a
        href="https://calendly.com/ramifazio/30min"
        rel="noreferrer"
        target="_blank"
      >
        <button>calendly</button>
      </a>
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
