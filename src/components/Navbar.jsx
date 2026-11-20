
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Dinesh K<span>.</span>
        </a>

        {/* NAVIGATION */}
        <nav
          className={`navbar-links ${menuOpen ? 'active' : ''}`}
          id="primary-navigation"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        {/* CTA BUTTON */}
        <a href="#contact" className="navbar-button">
          Let's Talk <span>↗</span>
        </a>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>
    </header>
  )
}

export default Navbar
