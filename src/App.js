import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  // Lock body scroll when nav is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);

  const goTo = (id) => {
    closeNav();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 420); // wait for overlay to slide out
  };

  const cardHover = {
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <span className="logo" onClick={() => goTo('home')}>
          <span className="logo-primary">Aarthi|Portfolio</span>
        </span>

        {/* Hamburger — opens full overlay */}
        <button className="menu-btn" onClick={openNav} aria-label="Open navigation">
          &#9776;
        </button>
      </nav>

      {/* ===== FULL-SCREEN NAV OVERLAY ===== */}
      <div className={`nav-overlay ${navOpen ? 'active' : ''}`}>
        {/* Close button */}
        <div className="close-btn" onClick={closeNav}>✕</div>

        {/* Nav links */}
        <a href="#home" onClick={() => goTo('home')}>Home</a>
        <a href="#about" onClick={() => goTo('about')}>About</a>
        <a href="#skills" onClick={() => goTo('skills')}>Skills</a>
        <a href="#projects" onClick={() => goTo('projects')}>Projects</a>
        <a href="#experience" onClick={() => goTo('experience')}>Experience</a>
        <a href="#contact" onClick={() => goTo('contact')}>Contact</a>

        {/* Dark / Light toggle */}
        <div className="toggle" onClick={() => setIsDark(prev => !prev)} title="Toggle theme">
          <span>{isDark ? '🌙' : '☀️'}</span>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          <h1 className="hero-name">AARTHI M</h1>
<p className="hero-sub">
Frontend Developer | React & React Native Enthusiast
</p>
<p className="hero-tag">
Passionate about creating clean, responsive web and mobile applications using HTML, CSS, JavaScript, React, UI/UX, and modern frontend technologies.
</p>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
                  Highly motivated and detail oriented 3rd-year B.Tech student pursuing a degree in Artificial Intelligence and Data Science at Suguna College of Engineering. Skilled in MERN stack development, with hands on experience in building responsive web and mobile applications using HTML, CSS, JavaScript, React.js, React Native, Node.js, Express.js, and MongoDB. Experienced in developing usercentric UIs, working with mock APIs (json-server), and implementing real-time session tracking. Passionate about full-stack development and eager to apply and expand technical expertise through a dynamic internship opportunit
                  </p>
        </motion.div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div className="skills-categories-wrapper">
          {[
            {
              title: "Frontend",
              skills: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "React" }
              ]
            },
            {
              title: "Programming Language",
              skills: [
                { name: "Python Basics" },
                { name: "JavaScript Basics" }
              ]
            },
            {
              title: "Tools & Designs",
              skills: [
                { name: "UI & UX" },
                { name: "Figma" },
                { name: "Git & GitHub" },
                { name: "Antigravity" },
                { name: "Expo CLI" }
              ]
            }
          ].map((cat, catIdx) => (
            <div key={catIdx} className="skill-category-block">
              <motion.h3 
                className="skill-category-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {cat.title}
              </motion.h3>
              <div className="skills-grid">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover="hover"
                    variants={cardHover}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>
        <div className="projects-grid">
          {[
            { title: 'Portfolio Website', desc: 'Personal portfolio website developed with React.js, CSS, and JS to showcase skills and projects.' },
            { title: 'Maternal Health Companion', desc: 'Ongoing: MERN stack platform featuring symptom analysis and emergency support.' },
            { title: 'AI for Mental Health Analysis', desc: 'NLP-powered chatbot built for mood interaction and mental wellness support.' }
          ].map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover="hover"
              variants={cardHover}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

       {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          
          <div className="experience-container">
            <motion.div 
              className="experience-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="exp-header">
                <h3 className="exp-role">Frontend Developer (Intern)</h3>
                <span className="exp-company">Rehabionics Private Limited</span>
              </div>
              <p className="exp-location">Coimbatore, India</p>
              <ul className="exp-details">
                <li>Developed the company website using HTML, CSS, and JavaScript.</li>
                <li>Worked on a responsive React Native healthcare application.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      <footer>© 2026 Aarthi | Portfolio</footer>

    </div>
  );
}

export default App;
