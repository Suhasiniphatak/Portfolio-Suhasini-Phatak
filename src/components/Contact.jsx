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
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-container">
        <div className="contact-text">
          <h3>Have a project in mind?</h3>

          <p>
            I'm always open to discussing new opportunities, frontend
            projects, and ways to create meaningful digital experiences.
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