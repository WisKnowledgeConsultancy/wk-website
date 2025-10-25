// src/components/About.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about-grid-section" id="about" aria-labelledby="about-heading">
      <header className="about-grid-header">
        <h2 id="about-heading">About WisKnowledge</h2>
        <p>
          Discover our identity, vision, and mission — all aligned to help learners and innovators grow with clarity.
        </p>
      </header>

      <div className="about-grid-container">
        {/* WHO WE ARE */}
        <article className="about-box" aria-labelledby="who-we-are-heading">
          <h3 id="who-we-are-heading">Who We Are</h3>
          <p>
            WisKnowledge is a forward-thinking consultancy offering educational and digital solutions. We specialize in IELTS coaching, spoken English, study abroad guidance, and strategic branding services — all with clarity, quality, and care.
          </p>
        </article>

        {/* OUR VISION */}
        <article className="about-box" aria-labelledby="our-vision-heading">
          <h3 id="our-vision-heading">Our Vision</h3>
          <p>
            To become a trusted global hub where learners and innovators grow through wisdom, skill, and strategic support. We aim to empower futures by bridging clarity and confidence.
          </p>
        </article>

        {/* OUR MISSION */}
        <article className="about-box" aria-labelledby="our-mission-heading">
          <h3 id="our-mission-heading">Our Mission</h3>
          <ul className="mission-list">
            <li>
              <FaCheckCircle className="tick-icon" aria-hidden="true" />
              <span>Deliver top tier IELTS and communication training.</span>
            </li>
            <li>
              <FaCheckCircle className="tick-icon" aria-hidden="true" />
              <span>Provide transparent study abroad consulting.</span>
            </li>
            <li>
              <FaCheckCircle className="tick-icon" aria-hidden="true" />
              <span>Support startups with digital branding and tools.</span>
            </li>
            <li>
              <FaCheckCircle className="tick-icon" aria-hidden="true" />
              <span>Inspire growth through knowledge and action.</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
