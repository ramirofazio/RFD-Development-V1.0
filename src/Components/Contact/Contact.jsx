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
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  height: 50%;
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
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledTextAreaContainer = styled(StyledInputContainer)`
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

  &:focus {
    outline: none;
  }
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
          <StyledInput type="text" name="clientCelphone" />
        </StyledInputContainer>
        <StyledTextAreaContainer>
          <StyledLabel>Message</StyledLabel>
          <StyledTextArea name="clientMessage" />
        </StyledTextAreaContainer>
        <StyledButton type="submit" value="Send" />
      </StyledForm>
    </StyledContainer>
  );
}

export default Contact;
