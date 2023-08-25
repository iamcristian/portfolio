import  { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import {
  AiOutlineArrowRight,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import { BsSend } from "react-icons/bs";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0nt5z6p",
        "template_6k46oy9",
        form.current,
        "QBrQlX1GKpzySod4o"
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <h3 className="section_subtitle">Contact Me</h3>

      <div className="contact_container">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <AiFillMail className="contact_card-icon" />

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">crisarandosyse@gmail.com</span>

              <a
                href="mailto:crisarandosyse@gmail.com"
                className="contact_button"
              >
                Write me
                <AiOutlineArrowRight className="contact_button-icon" />
              </a>
            </div>

            <div className="contact_card">
              <AiOutlineWhatsApp className="contact_card-icon" />

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">(591) 68453090</span>

              <a
                href="https://api.whatsapp.com/send?phone=59168453090&text=Hello, more information!"
                className="contact_button"
              >
                Write me
                <AiOutlineArrowRight className="contact_button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write your message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="yellow-button button_contact">
              Send Message
              <BsSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
