import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="wk-footer" id="footer" aria-label="Footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand">WisKnowledge</h3>
          <p className="footer-tagline">
            A service-oriented startup offering smart solutions for students and
            professionals. Knowledge with Wisdom – our commitment to clarity, trust,
            and value-driven consultancy services.
          </p>
          <address>
            <p>
              <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
             Suite -4 BIC IIU H-10 Islamabad
            </p>
            <p>
              <FaEnvelope className="footer-icon" aria-hidden="true" />
              <a href="mailto:wisknowledgeconsultancy@gmail.com">
                wisknowledgeconsultancy@gmail.com
              </a>
            </p>
            <p>
              <FaPhone className="footer-icon" aria-hidden="true" />
              <a href="tel:+923369859980">+92 336 9859980</a>
            </p>
          </address>
          <nav className="footer-social" aria-label="Social Media Links">
            <a
              href="https://www.facebook.com/profile.php?id=100090947373976"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/wisknowledge_consultancy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/923369859980"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="footer-col nav-col quick-links">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav" aria-label="Quick Links Navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#trainers">Trainers</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faqs">FAQs</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Services Links */}
        <div className="footer-col nav-col services-col">
          <h4 className="footer-heading">Our Services</h4>
          <nav className="footer-nav" aria-label="Services Navigation">
            <a href="#ielts">IELTS Coaching</a>
            <a href="#english">Spoken English</a>
            <a href="#workshop">Strategic Study Management Workshop</a>
            <a href="#camp">Strategic Summer Camp for Kids</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        ©️ 2025 WisKnowledge Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
