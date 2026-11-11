
import { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">

      <a href="/#home" className="brand" onClick={closeMenu}>
        <span className="brand-symbol">E</span>

        <span className="brand-name">
          <strong>ELITE</strong>
          <small>EPOXY TABLES</small>
        </span>
      </a>

      <button
        className="mobile-menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? '×' : '☰'}
      </button>

      <nav
        className={`main-nav ${menuOpen ? 'is-open' : ''}`}
        id="main-navigation"
      >
        <a href="/#home" onClick={closeMenu}>Home</a>

        <a href="/#collection" onClick={closeMenu}>
          Collection
        </a>

        <a href="/#craft" onClick={closeMenu}>
          Our Craft
        </a>

        <a href="/#why-us" onClick={closeMenu}>
          Why Choose Us
        </a>

        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="/#contact"
          className="mobile-nav-cta"
          onClick={closeMenu}
        >
          Request a Quote ↗
        </a>
      </nav>

      <a href="/#contact" className="nav-cta">
        Request a Quote <span>↗</span>
      </a>

    </header>
  )
}

export default Navbar
