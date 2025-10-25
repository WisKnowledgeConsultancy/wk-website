import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import "./App.css";

import Home from "./components/Home";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOSRefresher from "./components/AOSRefresher"; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <div className="main-bg" role="document">
      <Navbar />

      <main role="main">
        <section id="home" aria-label="Homepage">
          <Home />
        </section>

        <section id="services" style={{ paddingTop: "90px" }} aria-label="Services">
          <Services />
        </section>

        <section id="trainers" style={{ paddingTop: "90px" }} aria-label="Trainers">
          <Trainers />
        </section>

        <section id="testimonials" style={{ paddingTop: "90px" }} aria-label="Testimonials">
          <Testimonials />
        </section>

        <section id="faqs" style={{ paddingTop: "90px" }} aria-label="FAQs">
          <FAQs />
        </section>

        <section id="about" style={{ paddingTop: "90px" }} aria-label="About Us">
          <About />
        </section>

        <section id="contact" style={{ paddingTop: "90px" }} aria-label="Contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <AOSRefresher />
    </div>
  );
}

export default App;
