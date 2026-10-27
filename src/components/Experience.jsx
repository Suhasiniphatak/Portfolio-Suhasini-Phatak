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

            <h4>Swipewire Technologies, Chennai</h4>

            <p>
              Designing responsive and user-focused interfaces using Figma, reusable components, design systems, and modern UI/UX principles. Collaborating with development teams to ensure designs are translated into consistent and functional web experiences.
            </p>

            <div className="experience-tags">
              <span>UI/UX</span>
              <span>Figma</span>
              <span>Design Systems</span>
              <span>Responsive Design</span>
              <span>Prototyping</span>
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
              Bachelor's degree in Electronics and Communication Engineering, with a foundation in problem-solving, programming, and technology.
            </p>

            <div className="experience-tags">
              <span>Engineering</span>
              <span>Electronics & Communication</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;