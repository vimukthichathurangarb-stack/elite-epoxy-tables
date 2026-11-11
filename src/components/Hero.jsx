
function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-copy">

        <p className="hero-eyebrow">
          <span></span>
          BESPOKE FURNITURE · HANDCRAFTED
        </p>

        <h1>
          Where nature
          <br />
          meets <em>craft.</em>
        </h1>

        <p className="hero-description">
          Exceptional epoxy river tables, shaped by
          nature and finished by hand. Discover
          furniture designed to become the centrepiece
          of your space.
        </p>

        <div className="hero-actions">
          <a href="#collection" className="hero-primary">
            Explore the collection <span>↗</span>
          </a>

          <a href="#craft" className="hero-secondary">
            Discover our craft
          </a>
        </div>

        <div className="hero-proof">
          <div>
            <strong>01</strong>
            <span>Made to order</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Natural materials</span>
          </div>
        </div>

      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1697467943176-a6f3ff5aacbd?auto=format&fit=crop&w=1600&q=85"
          alt="Luxury furniture interior"
        />

        <div className="hero-photo-caption">
          <span>THE ART OF NATURAL FORM</span>
          <span>EST. 2026</span>
        </div>
      </div>

    </section>
  )
}

export default Hero

