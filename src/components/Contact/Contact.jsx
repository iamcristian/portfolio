import { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import {
  AiOutlineArrowRight,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import { BsSend } from "react-icons/bs";

import {contact} from "../../data/common.json"

export const Contact = () => {
  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    );
    e.target.reset();
  };

  return (
    <section className={`contact section ${theme}`} id="contact">
      <h2 className="section_title">{contact.title[language]}</h2>
      <h3 className="section_subtitle">{contact.subtitle[language]}</h3>

      <div className="contact_container">
        <div className="contact_content">
          <h3 className="contact_title">{contact.talk[language]}</h3>

          <div className="contact_info">
            <div className="contact_card">
              <AiFillMail className="contact_card-icon" />

              <h3 className="contact_card-title">
                {contact.label_email[language]}
              </h3>
              <span className="contact_card-data">
                crisarandosyse@gmail.com
              </span>

              <a
                href="mailto:crisarandosyse@gmail.com"
                className="contact_button"
              >
                {contact.button_write[language]}
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
                {contact.button_write[language]}
                <AiOutlineArrowRight className="contact_button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">{contact.write[language]}</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">{contact.label_name[language]}</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder={contact.placeholder_name[language]}
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">{contact.label_email[language]}</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder={contact.placeholder_email[language]}
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">{contact.label_message[language]}</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder={contact.placeholder_message[language]}
              ></textarea>
            </div>

            <button className="yellow-button button_contact">
              {contact.send[language]}
              <BsSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
