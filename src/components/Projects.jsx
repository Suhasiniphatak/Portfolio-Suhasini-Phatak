import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "AI Mock Interview Platform",
      type: "React + Full Stack Application",
      image: "/ai-mock-interview.png",
      liveLink:
        "https://ai-mock-interview-platform-mauve-kappa.vercel.app/",
      githubLink:
        "https://github.com/Suhasiniphatak/AI-Mock-Interview-Platform",
      description:
        "An AI-powered mock interview platform that allows users to practice interviews and receive feedback on their responses.",
      technologies: [
        "React",
        "JavaScript",
        "Express.js",
        "REST API",
      ],
    },

    {
      number: "02",
      title: "AI Resume Analyzer",
      type: "React + Backend Application",
      image: "/ai-resume-analyzer.png",
      liveLink:
        "https://ai-resume-analyzer-jet-chi.vercel.app/",
      githubLink:
        "https://github.com/Suhasiniphatak/AI-Resume-Analyzer",
      description:
        "A resume analysis application that evaluates resumes and provides useful suggestions to improve their quality and impact.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "REST API",
      ],
    },
  ];

  return (
    <section className="projects">
      <div className="section-heading">
        <p>MY RECENT WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-card-content">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live ↗
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;