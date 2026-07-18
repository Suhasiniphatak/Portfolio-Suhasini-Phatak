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
          <p className="hero-label">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Suhasini</span>
          </h1>

          <h2>
            UI/UX Designer <span>→</span> Frontend Developer
          </h2>

          <p className="hero-description">
            I create clean, user-focused digital experiences and build
            interactive web applications using React and modern frontend
            technologies.
          </p>

          <div className="hero-actions">
            {/* View My Work */}
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            {/* Download Resume */}
            <a
              href="/Suhasini Phatak-Resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>10+</h3>
              <p>Months Experience</p>
            </div>

            <div>
              <h3>3+</h3>
              <p>Projects Built</p>
            </div>

            <div>
              <h3>∞</h3>
              <p>Learning</p>
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
              Combining design thinking with frontend development to create
              meaningful web experiences.
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