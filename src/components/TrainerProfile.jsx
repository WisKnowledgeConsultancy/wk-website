import { useState, useEffect, useRef } from "react";
import ceoPhoto from '../assets/ceop.png';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
};

const expertiseItems = [
  { icon: "🎯", title: "IELTS Training", desc: "Comprehensive IELTS preparation with proven strategies for band 8+ scores." },
  { icon: "📚", title: "Curriculum Development", desc: "Designing structured academic curricula aligned with international standards." },
  { icon: "🌐", title: "Educational Programs", desc: "Crafting holistic educational frameworks for diverse learning environments." },
  { icon: "🔬", title: "Academic Research", desc: "Rigorous scholarly research published in internationally recognized journals." },
  { icon: "🗣️", title: "Workshop Facilitation", desc: "Engaging, high-impact workshops for academic and professional audiences." },
  { icon: "✍️", title: "Academic Writing", desc: "Mentoring advanced academic writing from essays to research publications." },
];

const stats = [
  { value: "27+", label: "Years Experience" },
  { value: "3×", label: "NBF Award Winner" },
  { value: "8.5", label: "Top Student Band" },
  { value: "3", label: "Countries Visited" },
];

const studentResults = [
  { name: "Umair Hafeez", score: "8.5", tag: "Outstanding" },
  { name: "Zubair", score: "8.0", tag: "Excellent" },
];

const testimonials = [
  { text: "Sir Fareed taught me everything in detail and always motivated me. He is truly a great teacher.", author: "Farwa Asif", role: "IELTS Student" },
  { text: "Excellent mentorship and IELTS preparation experience. Highly professional and supportive.", author: "Umair Hafeez", role: "IELTS Band 8.5" },
];

export default function TrainerProfile() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: "#172B4D", background: "#F7FAFF" }}>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #1a3278 0%, #234292 45%, #0d6efd 100%)", minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* decorative blobs */}
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "480px", height: "480px", borderRadius: "50%", background: "rgba(51,191,163,0.18)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", top: "40%", left: "50%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(51,191,163,0.10)", filter: "blur(30px)" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px", width: "100%", display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap", justifyContent: "space-between" }}>

          {/* Left */}
          <div style={{ flex: "1 1 480px", zIndex: 1 }}>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(-24px)", transition: "all 0.8s ease 0.1s" }}>
              <span style={{ display: "inline-block", background: "rgba(51,191,163,0.2)", border: "1px solid rgba(51,191,163,0.5)", color: "#33BFA3", borderRadius: "100px", padding: "6px 18px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "24px" }}>
                ✦ IELTS GURU · WisKnowledge Consultancy
              </span>
            </div>

            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(-20px)", transition: "all 0.8s ease 0.25s" }}>
              <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, margin: "0 0 12px" }}>
                Dr. Fareed<br />
                <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(90deg, #33BFA3 0%, #7ee8d4 100%)" }}>Brohi</span>
              </h1>
            </div>

            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(-16px)", transition: "all 0.8s ease 0.4s" }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", fontWeight: 500, marginBottom: "8px" }}>Chairperson · Trainer · Researcher</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", marginBottom: "36px", maxWidth: "480px", lineHeight: 1.7 }}>
                27+ years shaping academic excellence — IDP certified, internationally acclaimed, and dedicated to your IELTS success.
              </p>
            </div>

            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(12px)", transition: "all 0.8s ease 0.55s", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#achievements" style={{ background: "#33BFA3", color: "#fff", padding: "14px 28px", borderRadius: "12px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 8px 24px rgba(51,191,163,0.4)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 30px rgba(51,191,163,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(51,191,163,0.4)"; }}>
                View Achievements
              </a>
              <a href="#contact" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: "12px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}>
                Contact Trainer
              </a>
            </div>

            {/* Inline stats */}
            <div style={{ display: "flex", gap: "28px", marginTop: "48px", flexWrap: "wrap", opacity: heroVisible ? 1 : 0, transition: "all 0.8s ease 0.7s" }}>
              {[{ v: "27+", l: "Yrs" }, { v: "IDP", l: "Certified" }, { v: "8.5", l: "Top Band" }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#33BFA3" }}>{s.v}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile image */}
          <div style={{ flex: "0 0 auto", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "scale(1)" : "scale(0.9)", transition: "all 0.9s ease 0.3s" }}>
            <div style={{ position: "relative" }}>
              {/* Glow ring */}
              <div style={{ position: "absolute", inset: "-14px", borderRadius: "50%", background: "conic-gradient(from 0deg, #33BFA3, #234292, #33BFA3)", opacity: 0.5, animation: "spin 6s linear infinite" }} />
              <div style={{ position: "absolute", inset: "-10px", borderRadius: "50%", background: "#1a3278" }} />
              <div style={{ width: "260px", height: "260px", borderRadius: "50%", background: "linear-gradient(145deg, #2d4fa8, #1a3278)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", border: "4px solid rgba(51,191,163,0.4)" }}>
                <img 
                  src={ceoPhoto} 
                  alt="Dr. Fareed Brohi" 
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block"
                  }}
                />
              </div>
              {/* Floating badge */}
              <div style={{ position: "absolute", bottom: "8px", right: "-12px", background: "#33BFA3", color: "#fff", borderRadius: "12px", padding: "8px 14px", fontSize: "12px", fontWeight: 700, boxShadow: "0 6px 20px rgba(51,191,163,0.5)", whiteSpace: "nowrap" }}>
                ✓ IDP Certified
              </div>
            </div>
            {/* LinkedIn */}
            <a href="#" style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff", padding: "10px 20px", borderRadius: "10px", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, transition: "all 0.2s", backdropFilter: "blur(8px)" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              LinkedIn Profile
            </a>
          </div>
        </div>

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "64px", flexWrap: "wrap", alignItems: "flex-start" }}>

            <FadeIn className="" style={{ flex: "1 1 420px" }} delay={0}>
              <div style={{ flex: "1 1 420px" }}>
                <span style={{ color: "#33BFA3", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>About Dr. Fareed</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#172B4D", margin: "12px 0 20px", lineHeight: 1.2 }}>
                  Shaping Futures Through<br />
                  <span style={{ color: "#234292" }}>Academic Excellence</span>
                </h2>
                <p style={{ color: "#3A4A66", lineHeight: 1.85, fontSize: "1rem", marginBottom: "20px" }}>
                  Dr. Abdul Fareed Brohi is an accomplished academic, researcher, and trainer with extensive experience in teaching and training. Currently serving as an IELTS Trainer at WisKnowledge Consultancy and International Islamic University Islamabad (IIUI), he has contributed significantly to teaching, research, curriculum development, workshops, and international educational forums.
                </p>
                <p style={{ color: "#3A4A66", lineHeight: 1.85, fontSize: "1rem" }}>
                  He has authored books, edited children's literature, and published research in reputable journals — bringing a rare blend of academic depth and practical training mastery.
                </p>
                <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
                  {["🇺🇸 USA", "🇹🇷 Turkey", "🇧🇭 Bahrain"].map((c, i) => (
                    <span key={i} style={{ background: "#E6F0FF", color: "#234292", borderRadius: "8px", padding: "8px 16px", fontSize: "0.88rem", fontWeight: 600 }}>{c}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Stats grid */}
            <FadeIn delay={0.2} className="">
              <div style={{ flex: "1 1 340px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ background: "linear-gradient(135deg, #E6F0FF 0%, #f0f7ff 100%)", border: "1.5px solid #c8d9f5", borderRadius: "18px", padding: "28px 24px", textAlign: "center", transition: "transform 0.25s, box-shadow 0.25s", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(35,66,146,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#234292" }}>{s.value}</div>
                    <div style={{ color: "#3A4A66", fontSize: "0.82rem", fontWeight: 600, marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section style={{ background: "#F7FAFF", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <FadeIn delay={0}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={{ color: "#33BFA3", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>Areas of Mastery</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#172B4D", margin: "12px 0 0" }}>
                Core <span style={{ color: "#234292" }}>Expertise</span>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "24px" }}>
            {expertiseItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ background: "#fff", border: "1.5px solid #e0eafc", borderRadius: "20px", padding: "32px 28px", transition: "all 0.3s ease", cursor: "default", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(35,66,146,0.12)"; e.currentTarget.style.borderColor = "#33BFA3"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e0eafc"; }}>
                  <div style={{ width: "52px", height: "52px", background: "linear-gradient(135deg, #E6F0FF, #d4e5ff)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "18px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#172B4D", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ color: "#3A4A66", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <FadeIn delay={0}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={{ color: "#33BFA3", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>Recognition & Credentials</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#172B4D", margin: "12px 0 0" }}>
                Awards & <span style={{ color: "#234292" }}>Achievements</span>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: "🏆", title: "NBF Pakistan Award", sub: "National Book Foundation Award Winner", detail: "Awarded 3 consecutive times — a remarkable achievement in Pakistani literary and academic circles.", accent: "#f0c040" },
              { icon: "📜", title: "IDP IELTS Certified", sub: "Official IDP Certification", detail: "Internationally recognized certification verifying mastery of IELTS training methodologies.", accent: "#33BFA3" },
              { icon: "✈️", title: "International Exposure", sub: "USA · Turkey · Bahrain", detail: "Represented Pakistani academia and educational institutions on international forums.", accent: "#0052CC" },
              { icon: "📖", title: "Published Researcher", sub: "Reputable Academic Journals", detail: "Authored books and published research that shapes curriculum discourse across institutions.", accent: "#9c5cf2" },
            ].map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "linear-gradient(145deg, #fff 0%, #f7faff 100%)", border: `2px solid ${a.accent}22`, borderRadius: "20px", padding: "32px 28px", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 18px 44px ${a.accent}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{a.icon}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: a.accent, textTransform: "uppercase", marginBottom: "8px" }}>{a.sub}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#172B4D", marginBottom: "10px" }}>{a.title}</h3>
                  <p style={{ color: "#3A4A66", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{a.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT RESULTS ── */}
      <section style={{ background: "linear-gradient(135deg, #1a3278 0%, #234292 100%)", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(51,191,163,0.12)", filter: "blur(40px)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn delay={0}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={{ color: "#33BFA3", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>Proven Outcomes</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "12px 0 8px" }}>Student <span style={{ color: "#33BFA3" }}>IELTS Results</span></h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>Real students. Real results. Real transformation.</p>
            </div>
          </FadeIn>

          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            {studentResults.map((s, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: "24px", padding: "40px 48px", textAlign: "center", minWidth: "240px", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, #33BFA3, #2da88e)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>👤</div>
                  <div style={{ fontSize: "3rem", fontWeight: 900, color: "#33BFA3", lineHeight: 1 }}>{s.score}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: "0.08em", margin: "4px 0 12px" }}>IELTS BAND SCORE</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{s.name}</div>
                  <span style={{ display: "inline-block", marginTop: "10px", background: "rgba(51,191,163,0.2)", border: "1px solid rgba(51,191,163,0.4)", color: "#33BFA3", borderRadius: "100px", padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700 }}>{s.tag}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#F7FAFF", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <FadeIn delay={0}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={{ color: "#33BFA3", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>Student Voices</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#172B4D", margin: "12px 0 0" }}>
                What Students <span style={{ color: "#234292" }}>Say</span>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: "#fff", border: "1.5px solid #e0eafc", borderRadius: "24px", padding: "40px 36px", position: "relative", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(35,66,146,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: "3rem", color: "#E6F0FF", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: "20px", fontWeight: 900 }}>"</div>
                  <p style={{ color: "#3A4A66", fontSize: "1rem", lineHeight: 1.8, margin: "0 0 28px", fontStyle: "italic" }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #234292, #33BFA3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1rem" }}>
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#172B4D", fontSize: "0.95rem" }}>{t.author}</div>
                      <div style={{ color: "#33BFA3", fontSize: "0.8rem", fontWeight: 600 }}>{t.role}</div>
                    </div>
                  </div>
                  {/* accent line */}
                  <div style={{ position: "absolute", top: 0, left: "36px", width: "48px", height: "4px", background: "linear-gradient(90deg, #234292, #33BFA3)", borderRadius: "0 0 4px 4px" }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{ background: "linear-gradient(135deg, #0d1e5e 0%, #234292 50%, #0052CC 100%)", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(51,191,163,0.15) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <FadeIn delay={0}>
            <span style={{ display: "inline-block", background: "rgba(51,191,163,0.2)", border: "1px solid rgba(51,191,163,0.4)", color: "#33BFA3", borderRadius: "100px", padding: "6px 18px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>
              Begin Your Journey
            </span>
            <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "20px" }}>
              Start Your IELTS Journey<br />
              <span style={{ color: "#33BFA3" }}>With Expert Guidance</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "40px" }}>
              Join hundreds of students who have achieved their dream IELTS scores under Dr. Fareed Brohi's mentorship. Your academic future begins here.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button style={{ background: "#33BFA3", color: "#fff", padding: "16px 36px", borderRadius: "14px", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", boxShadow: "0 10px 30px rgba(51,191,163,0.4)", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(51,191,163,0.55)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(51,191,163,0.4)"; }}>
                Enroll Now →
              </button>
              <button style={{ background: "transparent", color: "#fff", padding: "16px 36px", borderRadius: "14px", fontWeight: 700, fontSize: "1rem", border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}>
                Learn More
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}