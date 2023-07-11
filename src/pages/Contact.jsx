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
            <input
              type="text"
              name="full-name"
              placeholder="Fullname"
              className="my-2"
              required
            />
          </div>

          <div className="details-field">
            <input type="email" name="user_email" 
            placeholder="Email Address" 
            required/>
          </div>

          <div className="details-field">
            <input
              type="text"
              name="phone-number"
              placeholder="Phone Number"
              className="my-2"
              required
            />
          </div>

          <div className="details-field">
            <textarea
              className="message-box p-3"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Please enter your message here"
              required
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
