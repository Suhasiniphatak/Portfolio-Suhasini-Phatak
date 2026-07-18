import { motion } from "framer-motion";

const Testimonials = () => {
  const approaches = [
    {
      quote:
        "I approach every project by first understanding the user and the problem before thinking about the solution.",
      title: "User First",
    },
    {
      quote:
        "My UI/UX experience helps me think beyond just writing code and focus on creating meaningful experiences.",
      title: "Design Thinking",
    },
    {
      quote:
        "I am constantly learning, experimenting, and improving my frontend development skills.",
      title: "Always Learning",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-heading">
        <p>MY APPROACH</p>
        <h2>What I Believe In</h2>
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