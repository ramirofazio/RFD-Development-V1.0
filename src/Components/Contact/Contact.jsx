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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
        href="https://drive.google.com/file/d/1HnXXhzaQ7C46LLt6I9_30wpWS5m5U-0y/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        <img src="https://img.icons8.com/material-outlined/24/000000/parse-resume.png" />
      </a>
    </div>
  );
}

export default Contact;
