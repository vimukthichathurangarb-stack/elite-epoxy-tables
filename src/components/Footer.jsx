
import { BUSINESS_WHATSAPP_NUMBER } from '../config.js'

function Footer() {

  const message = 'Hello! I would like to know more about your epoxy tables.'

  const whatsappUrl =
    `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-brand">
          <h2>ELITE</h2>
          <span>EPOXY TABLES</span>

          <p>
            Exceptional furniture inspired by nature,
            designed with intention and crafted by hand.
          </p>
        </div>

        <div className="footer-links">
          <h3>EXPLORE</h3>
          <a href="#home">Home</a>
          <a href="#collection">Our Collection</a>
          <a href="#craft">Our Craft</a>
          <a href="#contact">Contact</a>
          <a href="/#why-us">Why Choose Us</a>
        </div>

        <div className="footer-contact">
          <h3>GET IN TOUCH</h3>

          <p>Have a project in mind?</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us ↗
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Elite Epoxy Tables. All rights reserved.</p>
        <p>Crafted with intention.</p>
      </div>

    </footer>
  )
}

export default Footer
