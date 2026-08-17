import { motion } from "framer-motion";

const Testimonials = () => {
  const approaches = [
    {
      quote:
        "I start by understanding the user, the problem, and the goal before building the solution.",
      title: "User First",
    },
    {
      quote:
        "My UI/UX background helps me build interfaces that are not only functional, but also intuitive, accessible, and visually consistent.",
      title: "Design + Code",
    },
    {
      quote:
        "I continuously improve my frontend skills by building projects, exploring new technologies, and learning from real-world development challenges.",
      title: "Always Learning",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-heading">
        <p>MY APPROACH</p>
        <h2>How I Build</h2>
      </div>

      <div className="testimonial-grid">
        {approaches.map((approach, index) => (
          <motion.div
            className="testimonial-card"
            key={approach.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="quote-mark">"</div>

            <p>{approach.quote}</p>

            <h3>{approach.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;