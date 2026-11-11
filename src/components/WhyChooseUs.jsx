
function WhyChooseUs() {

  const benefits = [
    {
      icon: '01',
      title: 'Natural Materials',
      description:
        'Every design celebrates the unique grain, texture and character of natural wood.'
    },
    {
      icon: '02',
      title: 'Custom Designs',
      description:
        'Create furniture that reflects your personal style, space and preferences.'
    },
    {
      icon: '03',
      title: 'Attention to Detail',
      description:
        'Careful preparation and thoughtful craftsmanship at every stage.'
    },
    {
      icon: '04',
      title: 'Fine Finishing',
      description:
        'Beautifully finished surfaces designed to highlight the wood and resin.'
    }
  ]

  return (
    <section className="why-section" id="why-us">

      <div className="why-heading">

        <p>THE ELITE DIFFERENCE</p>

        <h2>
          More than furniture.
          <br />
          <em>A personal statement.</em>
        </h2>

        <span>
          Discover the details that make every piece distinctive.
        </span>

      </div>

      <div className="why-grid">

        {benefits.map((benefit) => (

          <article className="why-card" key={benefit.icon}>

            <span className="why-number">
              {benefit.icon}
            </span>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>

          </article>

        ))}

      </div>

    </section>
  )
}

export default WhyChooseUs

