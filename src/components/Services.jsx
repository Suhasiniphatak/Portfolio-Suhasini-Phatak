// import { motion } from "framer-motion";

// const Services = () => {
//   const services = [
//     {
//       number: "01",
//       title: "Design to Code",
//       description:
//         "Turning UI/UX designs into clean, responsive, and functional web interfaces using modern frontend technologies.",
//     },
//     {
//       number: "02",
//       title: "Frontend Development",
//       description:
//         "Building interactive and responsive web applications using React, JavaScript, and reusable components.",
//     },
//     {
//       number: "03",
//       title: "Responsive Interfaces",
//       description:
//         "Creating responsive interfaces that provide a consistent and user-friendly experience across desktop, tablet, and mobile devices.",
//     },
//   ];

//   return (
//     <section className="services">
//       <div className="section-heading">
//         <p>WHAT I BUILD</p>
//         <h2>What I Build</h2>
//       </div>

//       <div className="services-grid">
//         {services.map((service, index) => (
//           <motion.div
//             className="service-card"
//             key={service.number}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.15,
//             }}
//             viewport={{ once: true }}
//           >
//             <span>{service.number}</span>

//             <h3>{service.title}</h3>

//             <p>{service.description}</p>

//             <div className="service-arrow">↗</div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;