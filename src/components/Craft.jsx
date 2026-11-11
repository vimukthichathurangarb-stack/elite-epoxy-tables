
import FallbackImage from './FallbackImage.jsx'

function Craft() {

  const craftSteps = [
    {
      number: '01',
      title: 'Wood Selection',
      image: '/images/craft-wood.jpg',
      description:
        'Every design begins with carefully selected natural wood, chosen for its grain, texture and character.'
    },
    {
      number: '02',
      title: 'Design and Preparation',
      image: '/images/craft-design.jpg',
      description:
        'The wood is prepared and positioned to create the desired shape and layout before the resin is poured.'
    },
    {
      number: '03',
      title: 'Resin Pouring',
      image: '/images/gg.jpg',
      description:
        'Epoxy resin is poured and cured to create the distinctive river effect between the natural wood.'
    },
    {
      number: '04',
      title: 'Finishing',
      image: '/images/kk.jpg',
      description:
        'The surface is sanded and polished to bring out the natural beauty of the wood and resin.'
    }
  ]

  return (
    <section className="craft-section" id="craft">

      <div className="craft-heading">
        <p>THE ART OF CRAFTSMANSHIP</p>

        <h2>
          Crafted with nature.
          <br />
          Finished with <em>purpose.</em>
        </h2>

        <span>
          Every table begins with an idea and develops
          through careful preparation, creativity and craftsmanship.
        </span>
      </div>

      <div className="craft-grid">

        {craftSteps.map((step) => (

          <article className="craft-card" key={step.number}>

            <span className="craft-number">
              {step.number}
            </span>

            <div className="craft-card-image">
              <FallbackImage
                src={step.image}
                alt={step.title}
              />
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Craft
