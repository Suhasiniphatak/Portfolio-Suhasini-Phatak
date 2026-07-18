import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      className="experience"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-heading">
        <p>MY JOURNEY</p>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">2025 — Present</span>

            <h3>Junior UI/UX Designer</h3>

            <h4>Professional Experience</h4>

            <p>
              Working on user interface and user experience design, creating
              clean and intuitive digital experiences using Figma and modern
              design principles.
            </p>

            <div className="experience-tags">
              <span>UI/UX</span>
              <span>Figma</span>
              <span>Design Systems</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-date">Education</span>

            <h3>ECE Graduate</h3>

            <h4>KLS VDIT, Haliyal</h4>

            <p>
              Built a strong foundation in engineering, problem solving, and
              technology while developing an interest in software and frontend
              development.
            </p>

            <div className="experience-tags">
              <span>Engineering</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;