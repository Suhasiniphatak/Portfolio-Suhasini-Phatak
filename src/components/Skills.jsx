import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      "Figma",
      "UI/UX Design",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

  return (
    <section className="skills">
      <div className="section-heading">
        <p>MY TOOLKIT</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-category"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;