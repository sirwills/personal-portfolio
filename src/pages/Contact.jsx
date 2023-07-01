import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c86mxhm",
        "template_w5o061o",
        form.current,
        "esMHL0OTStmieauSQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contactPage">
      <div className="contact-content">
        <h3 className="contact-form-heading">
          Lets Unlock the Potential of the Digital <br /> World Together!
        </h3>

        <form ref={form} onSubmit={sendMail} className="contact-form">
          <div className="details-field">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="full-name" />
          </div>

          <div className="details-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" />
          </div>

          <div className="details-field">
            <label htmlFor="phone-number">Phone number</label>
            <input type="number" name="phone-number" />
          </div>

          <div className="details-field">
            <label htmlFor="message">How can i help</label>
            <textarea
              className="message-box"
              name="message"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="message-btn">
            Send Message<i className="fa-solid fa-paper-plane mx-2"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
