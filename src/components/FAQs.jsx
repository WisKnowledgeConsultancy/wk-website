import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQs.css";

const faqs = [
  {
    question: "What is the duration of your IELTS program?",
    answer: "It runs for 4 weeks, 4 days a week, with flexible timing options.",
  },
  {
    question: "Are online services available?",
    answer: "Yes, all services including IELTS, Spoken English, and counseling are available online.",
  },
  {
    question: "How can I register?",
    answer: "You can register by visiting our office, contacting via WhatsApp, or filling out the online form.",
  },
  {
    question: "Do you handle the full visa application process?",
    answer: "Yes, we assist with everything from university applications to visa interviews and approval.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes. Full refund is available before the course starts. No refund after course commencement.",
  },
  {
    question: "What is the fee structure for IELTS and Spoken English?",
    answer: "Fees depend on course selection. Discounts may apply for early registration or group enrollments.",
  },
  {
    question: "Do you offer weekend or evening classes?",
    answer: "Yes, we provide flexible schedules including evening and weekend batches.",
  },
  {
    question: "Is study material included in the course?",
    answer: "Yes, all required materials and practice exams are included.",
  },
  {
    question: "Where is the institute located?",
    answer: "We are located in the Incubation Center, IIUI New Campus, Islamabad.",
  },
  {
    question: "Do you provide counseling for studying in countries like UK, USA, or Canada?",
    answer: "Yes, we offer complete free counseling and admission guidance for top countries worldwide.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faqs">
      <h2 className="faq-title" data-aos="fade-down">Frequently Asked Questions</h2>
      <div className="faq-list" data-aos="fade-up">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            <div
              id={`faq-question-${index}`}
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              tabIndex={0}
              role="button"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
              }}
            >
              {item.question}
              <span className="faq-toggle-icon" aria-hidden="true">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer-wrapper"
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
