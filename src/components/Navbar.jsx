import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <h2 className="logo"><SP /></h2>

                <ul>
  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#experience">Experience</a>
  </li>

  <li>
    <a href="#skills">Skills</a>
  </li>

  <li>
    <a href="#projects">Projects</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>

                <a href="#contact" className="nav-button">
                    Let's Talk
                </a>
            </div>
        </nav>
    );
};

export default Navbar;