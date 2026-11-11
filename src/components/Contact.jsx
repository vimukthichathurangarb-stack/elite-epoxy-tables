import { BUSINESS_WHATSAPP_NUMBER } from '../config.js'

function Contact() {

  const message =
    "Hello! I would like to enquire about a custom epoxy table."

  const whatsappUrl =
    `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <section className="contact-section" id="contact">

      <p className="contact-eyebrow">
        LET'S CREATE SOMETHING UNIQUE
      </p>

      <h2>
        A table made for
        <em> your space.</em>
      </h2>

      <p>
        Tell us about your preferred design,
        materials and dimensions. Let's create
        something extraordinary together.
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        Discuss Your Project ↗
      </a>

    </section>
  )
}

export default Contact