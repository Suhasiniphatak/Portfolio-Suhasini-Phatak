import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

const App = () => {
  return (
    <div>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <Testimonials />

      <div id="github">
        <Github />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;