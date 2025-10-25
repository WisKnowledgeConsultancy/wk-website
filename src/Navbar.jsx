import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="nav-logo">
          <img 
            src="/logo.jpeg" 
            alt="WisKnowledge Training Center Logo" 
            className="nav-logo-img" 
            loading="lazy" 
          />
          <h1 className="nav-title">WisKnowledge</h1>
        </div>

        <button 
          className="nav-toggle" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav 
          className={`nav-links ${menuOpen ? "active" : ""}`} 
          role="navigation" 
          aria-label="Primary"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
