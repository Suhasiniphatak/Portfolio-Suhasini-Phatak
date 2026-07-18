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
            I am a UI/UX Designer with 10 months of professional experience,
            passionate about creating clean and user-focused digital
            experiences.
          </p>

          <p>
            With a background in Electronics and Communication Engineering, I
            am currently transitioning into Frontend Development and building
            interactive web applications using React.
          </p>

          <p>
            I enjoy combining design thinking with frontend development to
            create interfaces that are both visually appealing and functional.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <span>01</span>
            <h3>UI/UX Designer</h3>
            <p>Professional design experience</p>
          </div>

          <div className="highlight-card">
            <span>02</span>
            <h3>React Developer</h3>
            <p>Building modern web applications</p>
          </div>

          <div className="highlight-card">
            <span>03</span>
            <h3>ECE Graduate</h3>
            <p>Engineering background</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;