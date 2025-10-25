import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    message:
      "Scored 6.5 in IELTS and secured XYZ University admission—thanks WisKnowledge!",
    name: "Student",
  },
  {
    message:
      "I was impressed with Wis Knowledge Summer Camp engaging activities and qualified staff, who created a safe and supportive environment. My child enjoyed all the activities and formed new friendships. To improve, I suggest to conduct twice a year (Summer and winter camp). Overall, I'm satisfied with the experience and would recommend the camp to others. The organizers were outstanding. Thank you for a memorable summer 2023 and 2024!",
    name: "Sir Jawad",
  },
  {
    message:
      "Got my student visa through their consultancy. Got 7 band in IELTS. Very supportive team!",
    name: "Student",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ JSON-LD Reviews
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wisknowledge.com/#organization",
    "name": "WisKnowledge Academy",
    "url": "https://wisknowledge.com/",
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "reviewBody": t.message,
      "author": {
        "@type": "Person",
        "name": t.name,
      },
      "datePublished": "2025-08-30", // ❗ replace with real dates if available
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };

  return (
    <section
      className="testimonials-bg"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* ✅ SEO tags + JSON-LD */}
      <Helmet>
        <title>WisKnowledge Success Stories – Real Testimonials</title>
        <meta
          name="description"
          content="Read real testimonials from students and parents about WisKnowledge IELTS coaching, summer camps, and visa consultancy support."
        />
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema, null, 2)}
        </script>
      </Helmet>

      <header>
        <h2
          id="testimonials-heading"
          className="testimonials-title"
          data-aos="fade-down"
        >
          Real Stories, Real Impact
        </h2>
        <p className="testimonials-subtitle" data-aos="fade-up">
          These aren’t just reviews — they’re journeys of transformation. Hear
          what our students and parents say about WisKnowledge.
        </p>
      </header>

      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <article
            className="testimonial-card"
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            <blockquote className="testimonial-message">
              “{t.message}”
            </blockquote>
            <p className="testimonial-name">— {t.name}</p>
          </article>
        ))}
      </div>

      <a
        href="https://wa.me/923369859980"
        className="testimonial-cta"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
        aria-label="Contact WisKnowledge on WhatsApp"
      >
        Start Your Success Story — Contact Us on WhatsApp
      </a>
    </section>
  );
}
