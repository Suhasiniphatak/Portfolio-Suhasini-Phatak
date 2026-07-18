import { motion } from "framer-motion";

const Github = () => {
  return (
    <motion.section
      className="github"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="github-container">
        <div>
          <p className="github-label">BUILDING IN PUBLIC</p>

          <h2>Always learning. Always building.</h2>

          <p className="github-description">
            I continuously work on personal projects and explore new
            technologies to improve my frontend development skills.
          </p>

          <a
            href="https://github.com/Suhasiniphatak"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            Visit My GitHub ↗
          </a>
        </div>

        <div className="github-visual">
          <div className="code-line">
            <span>const</span> developer = {"{"}
          </div>

          <div className="code-line indent">
            <span>learning:</span> true,
          </div>

          <div className="code-line indent">
            <span>building:</span> true,
          </div>

          <div className="code-line indent">
            <span>growth:</span> "∞"
          </div>

          <div className="code-line">{"}"}</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Github;