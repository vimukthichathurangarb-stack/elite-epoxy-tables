import { BUSINESS_WHATSAPP_NUMBER } from '../config.js'
import { Link } from 'react-router'
import FallbackImage from './FallbackImage.jsx'

function ProductCard({ product }) {


  const message = `Hello! I'm interested in ${product.name}.
Price: Rs. ${product.price.toLocaleString('en-LK')}.
Please share more details about availability and delivery.`
  const whatsappUrl =
  `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`


  return (
    <article className="product-card">

    <div className="product-image">
          <FallbackImage
           src={product.image}
           alt={product.name}
          />
   </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>
          <Link
               to={`/products/${product.id}`}
            className="product-details-link"
              >
               View Details ↗ 
          </Link> 
        <div className="product-bottom">

          <strong>
            Rs. {product.price.toLocaleString('en-LK')}
          </strong>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire ↗
          </a>

        </div>

      </div>

    </article>
  )
}

export default ProductCard
