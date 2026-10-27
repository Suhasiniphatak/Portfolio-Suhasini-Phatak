import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-label">UI/UX Designer & React Developer · Fintech</p>

          <h1>
            Hi, I'm <span>Suhasini</span>
          </h1>

          <h2>
            Frontend Developer <span>|</span> UI/UX Designer
          </h2>

          <p className="hero-description">
            I build responsive and interactive web applications using React, JavaScript, and modern frontend technologies, backed by a strong UI/UX design background.
          </p>

          <div className="hero-actions">
            {/* View My Work */}
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            {/* Download Resume */}
            <a
              href="/Suhasini_Resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>1</h3>
              <p>Year of Experience</p>
            </div>

            <div>
              <h3>3+</h3>
              <p>Projects Built</p>
            </div>

            <div>
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-card">
            <div className="visual-top">
              <span className="status"></span>
              Available for opportunities
            </div>

            <div className="visual-icon">{"</>"}</div>

            <h3>Building digital experiences.</h3>

            <p>
              Combining UI/UX expertise with React development to build responsive, user-focused web applications.
            </p>

            <div className="visual-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>UI/UX</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;