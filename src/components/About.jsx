import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h3>Designing with purpose. Building with code.</h3>

          <p>
            I am a Frontend Developer with professional UI/UX design experience, focused on building clean, responsive, and user-friendly web applications.
          </p>

          <p>
            With a background in Electronics and Communication Engineering and UI/UX design, I build interactive web applications using React, JavaScript, and modern frontend technologies.
          </p>

          <p>
            I combine design thinking with frontend development to create interfaces that are visually polished, responsive, accessible, and functional.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <span>01</span>
            <h3>Product Design</h3>
            <p>User flows, wireframes, prototypes and interface design</p>
          </div>

          <div className="highlight-card">
            <span>02</span>
            <h3>Frontend Development</h3>
            <p>React, JavaScript and responsive web projects</p>
          </div>

          <div className="highlight-card">
            <span>03</span>
            <h3>Engineering Background</h3>
            <p>Electronics & Communication Engineering</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;