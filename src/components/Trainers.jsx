import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Trainers.css";

const trainers = [
  {
    name: "Dr. Abdul Fareed Brohi",
    title: "Language & IELTS Trainer",
    description:
      "25+ years of expertise helping students achieve Band 7+ in IELTS with proven strategies and mentorship.",
    image: "/male.jpeg",
  },
  {
    name: "Dr. Nishwa",
    title: "Summer Camp Trainer",
    description:
      "Guides young learners with interactive summer programs to develop their communication and soft skills.",
    image: "/female.jpeg",
  },
];

export default function Trainers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="trainers-section"
      id="trainers"
      aria-labelledby="trainers-heading"
    >
      <div className="trainers-container">
        <header className="trainers-intro" data-aos="fade-up">
          <h2 id="trainers-heading">Meet Our Trainers</h2>
          <p>
            Our trainers are mentors, innovators, and lifelong educators. Learn
            from experts who are passionate about your growth and success.
          </p>
        </header>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <article
              key={index}
              className="trainer-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              itemScope
              itemType="https://schema.org/Person"
            >
              <img
                src={trainer.image}
                alt={`Portrait of ${trainer.name}`}
                className="trainer-img"
                itemProp="image"
              />
              <h3 className="trainer-name" itemProp="name">
                {trainer.name}
              </h3>
              <p className="trainer-role" itemProp="jobTitle">
                {trainer.title}
              </p>
              <p className="trainer-desc" itemProp="description">
                {trainer.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
