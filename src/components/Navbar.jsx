import React, { useState } from "react";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <div className="navbar-container">
        <h2 className="logo">Suhasini.dev</h2>
        
<button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
>
  {menuOpen ? "✕" : "☰"}
</button>


        <ul className={menuOpen ? "menu-open":""}>
          <li>
            <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
          </li>

          <li>
            <a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a>
          </li>

          <li>
            <a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a>
          </li>

          <li>
            <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
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