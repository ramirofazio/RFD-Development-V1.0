import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label>Full Name</label>
      <input type="text" name="clientFullName" />
      <label>Email</label>
      <input type="email" name="clientEmail" />
      <label>Celphone</label>
      <input type="number" name="clientCelphone" />
      <label>Message</label>
      <textarea name="clientMessage" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
