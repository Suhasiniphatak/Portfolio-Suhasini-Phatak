import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "Creating clean, intuitive, and user-focused interfaces using design thinking and modern UI/UX principles.",
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Building interactive and responsive web applications using React, JavaScript, and modern frontend technologies.",
    },
    {
      number: "03",
      title: "Responsive Web Design",
      description:
        "Translating designs into responsive interfaces that provide a consistent experience across different screen sizes.",
    },
  ];

  return (
    <section className="services">
      <div className="section-heading">
        <p>WHAT I DO</p>
        <h2>Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={service.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <span>{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-arrow">↗</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;