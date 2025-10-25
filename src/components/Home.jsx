import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";

const slides = [
  { image: "/pic1.jpeg", title: "You are not just chasing a goal — you're building a legacy, and every step you take is already a victory." },
  { image: "/pic2.jpeg", title: "No matter how small the progress seems, every moment of effort is shaping the future you dream of — don't stop now." },
  { image: "/pic3.jpeg", title: "You were born with greatness within — and the world is waiting to see it bloom." },
  { image: "/pic4.jpeg", title: "Your journey matters, your voice matters, and your light has the power to guide others. Keep shining." },
  { image: "/pic5.jpeg", title: "Believe in your dreams like the world depends on them — because someone, somewhere will be inspired by your courage." },
  { image: "/pic6.jpeg", title: "Fall in love with the process, even when it’s tough — because growth often hides in the moments we want to give up." },
  { image: "/pic7.jpeg", title: "You are seen, you are valued, and you are capable of far more than you imagine — never forget that." },
  { image: "/pic8.jpeg", title: "Dream boldly. Walk humbly. Love deeply. And never stop learning — the world belongs to those who keep moving with heart." },
  { image: "/pic9.jpeg", title: "Every obstacle is a chapter, not the end — your story still has many pages of triumph and beauty waiting to be written." },
  { image: "/pic10.jpeg", title: "You are not behind — you are on your own divine timeline, preparing for something remarkable." },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-wrapper" aria-label="Motivational Slide Show">
      <img
        src={slides[current].image}
        alt={`Inspirational Slide ${current + 1}`}
        className="hero-bg"
        loading="lazy"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[current].title}
            className="hero-title"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {slides[current].title}
          </motion.h1>
        </AnimatePresence>

        <motion.a
          href="#services"
          className="hero-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          aria-label="Explore our services section"
        >
          Explore Services
        </motion.a>
      </div>
    </section>
  );
}
