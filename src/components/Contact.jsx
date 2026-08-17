import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Build Something Together</h2>
      </div>

      <div className="contact-container">
        <div className="contact-text">
          <h3>Looking for a Frontend Developer?</h3>

          <p>
            I'm open to frontend development opportunities where I can contribute my UI/UX experience, React skills, and passion for building user-focused web applications.
          </p>

          <a
            href="mailto:phataksuhasini16@gmail.com"
            className="email-link"
          >
            phataksuhasini16@gmail.com ↗
          </a>
        </div>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/suhasini-phatak-80b75125b/" className="contact-link">
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

          <a href="https://github.com/Suhasiniphatak" className="contact-link">
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a href="mailto:phataksuhasini16@gmail.com" className="contact-link">
            <span>Email</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;