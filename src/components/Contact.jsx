import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-wrapper" id="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <header>
          <h2 className="contact-heading" id="contact-heading">Get in Touch</h2>
          <p className="contact-subheading">
            We’re here to guide, support, and inspire. Reach out through any of the channels below — your journey starts with a conversation.
          </p>
        </header>

        <div className="contact-cards">
          {/* Email */}
          <a
            className="contact-card"
            href="mailto:wisknowledgeconsultancy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email WisKnowledge Consultancy"
          >
            <div className="icon-circle" aria-hidden="true"><FaEnvelope /></div>
            <h3>Email Us</h3>
            <p>wisknowledgeconsultancy@gmail.com</p>
          </a>

          {/* WhatsApp */}
          <a
            className="contact-card"
            href="https://wa.me/923369859980"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact WisKnowledge on WhatsApp"
          >
            <div className="icon-circle" aria-hidden="true"><FaPhoneAlt /></div>
            <h3>Call / WhatsApp</h3>
            <p>+92 336 9859980</p>
          </a>

          {/* Location */}
          <a
            className="contact-card"
            href="https://www.google.com/maps?q=Suite+-4+BIC+IIU+H-10+Islamabad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find WisKnowledge on Google Maps"
          >
            <div className="icon-circle" aria-hidden="true"><FaMapMarkerAlt /></div>
            <h3>Visit Us</h3>
            <p>
              Suite -4 BIC IIU H-10<br />
              Islamabad
            </p>
          </a>

          {/* Facebook */}
          <a
            className="contact-card"
            href="https://www.facebook.com/profile.php?id=100090947373976"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit WisKnowledge on Facebook"
          >
            <div className="icon-circle" aria-hidden="true"><FaFacebook /></div>
            <h3>Facebook</h3>
            <p>Follow us on Facebook</p>
          </a>

          {/* Instagram */}
          <a
            className="contact-card"
            href="https://instagram.com/wisknowledge_consultancy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit WisKnowledge on Instagram"
          >
            <div className="icon-circle" aria-hidden="true"><FaInstagram /></div>
            <h3>Instagram</h3>
            <p>Explore our journey on Instagram</p>
          </a>
        </div>
      </div>
    </section>
  );
}
