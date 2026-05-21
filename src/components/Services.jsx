import { useState } from "react";
import "./Services.css"; // We'll use the existing CSS

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("ielts");

  const tabs = [
    { id: "ielts", label: "IELTS" },
    { id: "spoken", label: "SPOKEN ENGLISH" },
    { id: "abroad", label: "STUDY ABROAD" },
    { id: "summer", label: "SUMMER CAMP" }
  ];

  const servicesData = {
    ielts: {
      title: "IELTS",
      subDescription: "Master IELTS with Expert Guidance & Smart Learning",
      mainDescription: "At WisKnowledge Consultancy, our IELTS preparation program is designed to help students achieve their target band scores through structured learning, certified trainers, mock evaluations, and personalized strategies. We focus on all four modules: Listening, Reading, Writing, and Speaking, with practical techniques, real exam practice, and confidence-building sessions to maximize performance in both Academic and General IELTS.",
      highlight: "We don't just prepare students for IELTS, we prepare them for global opportunities.",
      formLink: "https://forms.gle/USsMgQDFvMHWPa5H6",
      features: [
        { title: "Expert IELTS Trainers", desc: "Certified instructors providing personalized guidance, proven exam techniques, and one-on-one support for higher band achievement." },
        { title: "Free IDP Mock Test Support", desc: "As a referral partner of IDP IELTS, we provide free mock tests and speaking practice sessions to help students assess their performance before the actual exam and avoid unnecessary test costs." },
        { title: "Flexible Learning Modes", desc: "Morning, evening, and online classes designed for students, professionals, and busy learners." },
        { title: "Result-Oriented Preparation", desc: "Focused practice sessions, band improvement strategies, and performance analytics to help students achieve their desired scores confidently." }
      ]
    },
    spoken: {
      title: "SPOKEN ENGLISH",
      subDescription: "Build Confidence Through Practical English Communication",
      mainDescription: "Our Spoken English program helps learners improve fluency, pronunciation, vocabulary, and everyday communication skills through interactive activities and real-life speaking practice. Whether for academics, interviews, presentations, or professional growth, we create a supportive learning environment that develops confidence and effective communication abilities.",
      highlight: "We transform hesitation into confident communication.",
      formLink: "https://forms.gle/S4CKQTwFqmozdiVa9",
      features: [
        { title: "Interactive Speaking Sessions", desc: "Engaging discussions, presentations, and conversation activities that improve real-world communication skills." },
        { title: "Fluency & Pronunciation Training", desc: "Focused exercises to improve accent clarity, pronunciation, confidence, and speaking flow." },
        { title: "Professional Communication Skills", desc: "Training for interviews, workplace communication, public speaking, and professional interactions." },
        { title: "Beginner to Advanced Levels", desc: "Structured learning plans suitable for students, professionals, and learners at every proficiency level." }
      ]
    },
    abroad: {
      title: "STUDY ABROAD CONSULTANCY",
      subDescription: "Your Gateway to International Education & Career Success",
      mainDescription: "WisKnowledge Consultancy provides professional study abroad guidance for students aiming to pursue higher education internationally. From university selection and assistance to SOP writing, visa processing, interview preparation, and complete application support, we guide students through every stage of their journey with transparency, professionalism, and personalized counseling.",
      highlight: "We guide students beyond admissions, towards successful international futures.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSezqTIA5IViAN01ha5H4_RDzOnI-4t1UGnwyIaiyLBbTUwj2w/viewform?usp=abroad",
      features: [
        { title: "University & Course Selection", desc: "Personalized counseling to identify the best universities, programs, and countries based on student goals." },
        { title: "Transparent Process & Student Guidance", desc: "We maintain complete transparency at every step of the study abroad process by providing honest guidance, regular updates, personalized counseling, and dedicated support throughout applications, documentation, visa procedures, and final admissions." },
        { title: "Visa & Documentation Support", desc: "Professional assistance for visa filing, documentation, SOPs, interview preparation, and application processes." },
        { title: "End-to-End Student Guidance", desc: "Complete support from career counseling to pre-departure preparation for a smooth international transition." }
      ]
    },
    summer: {
      title: "SUMMER CAMP",
      subDescription: "Creative Learning & Skill Development for Future Leaders",
      mainDescription: "Our Summer Camp programs are designed to combine education, creativity, confidence-building, and practical learning in an engaging environment. Students participate in interactive workshops, communication activities, leadership exercises, and skill-based sessions that encourage personal growth, teamwork, and innovation.",
      highlight: "Learning becomes exciting when creativity, confidence, and innovation come together.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSezqTIA5IViAN01ha5H4_RDzOnI-4t1UGnwyIaiyLBbTUwj2w/viewform?usp=summer",
      features: [
        { title: "Personality Development Activities", desc: "Confidence-building exercises, communication sessions, and leadership activities for student growth." },
        { title: "Creative & Interactive Learning", desc: "Hands-on projects, group tasks, games, and practical workshops that make learning engaging and enjoyable." },
        { title: "Technology & Innovation Exposure", desc: "Sessions focused on digital skills, creativity, AI awareness, and modern learning approaches." },
        { title: "Fun, Learning & Teamwork", desc: "A balanced environment combining educational activities, creativity, collaboration, and enjoyable experiences." }
      ]
    }
  };

  const current = servicesData[activeTab];

  return (
    <section className="services-wrapper" id="services">
      {/* Section Header */}
      <div className="services-intro">
        <span className="services-badge">What We Offer</span>
        <h2 className="services-heading-new">
          Our <span className="services-heading-highlight">Premium Services</span>
        </h2>
      </div>

      {/* Card container */}
      <div className="services-card-container">
        {/* Tabs */}
        <div className="services-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? 'tab-button-active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="services-tab-content">
          <div className="services-tab-grid">
            
            {/* Left Column */}
            <div className="services-left-col">
              <div className="service-category-tag">{current.title}</div>
              <h3 className="service-subheading-title">{current.subDescription}</h3>
              <p className="service-main-description">{current.mainDescription}</p>
              <div className="service-divider"></div>
              
              {/* Highlight Quote */}
              <div className="service-highlight">
                ✦ {current.highlight}
              </div>

              {/* Action Button */}
              {(activeTab === "ielts" || activeTab === "spoken") ? (
                <a
                  href={current.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
                >
                  Register Now <span>→</span>
                </a>
              ) : (
                <a
                  href="https://wa.me/923369859980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
                >
                  Learn More <span>→</span>
                </a>
              )}
            </div>

            {/* Right Column - Feature Cards */}
            <div className="services-right-col">
              {current.features.map((feature, idx) => (
                <div key={idx} className="service-feature-card">
                  <h4 className="service-feature-title">{feature.title}</h4>
                  <p className="service-feature-description">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;