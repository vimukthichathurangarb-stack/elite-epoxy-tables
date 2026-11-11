
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import { BUSINESS_WHATSAPP_NUMBER } from '../config.js'
import FallbackImage from './FallbackImage.jsx'


function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    async function fetchProduct() {

      try {
        setLoading(true)
        setError('')

        const response = await fetch('/products.json')

        if (!response.ok) {
          throw new Error('Could not load products')
        }

        const data = await response.json()

        const selectedProduct = data.find(
          (item) => String(item.id) === id
        )

        if (!selectedProduct) {
          throw new Error('Product not found')
        }

        setProduct(selectedProduct)

        const images = selectedProduct.images?.length
          ? selectedProduct.images
          : [selectedProduct.image]

        setSelectedImage(images[0])

      } catch (error) {
        setError(error.message)

      } finally {
        setLoading(false)
      }
    }

    fetchProduct()

  }, [id])

  if (loading) {
    return <p>Loading product...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  const productImages = product.images?.length
    ? product.images
    : [product.image]

  const message =
    `Hello! I'm interested in ${product.name}. Price: Rs. ${product.price.toLocaleString('en-LK')}. Please share more details.`

  const whatsappUrl =
    `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <section className="product-detail">

      <div className="detail-gallery">

        <div className="detail-image">
        
          <FallbackImage
               src={selectedImage}
               alt={product.name}
           />
        </div>

        <div className="detail-thumbnails">

          {productImages.map((image, index) => (

            <button
              type="button"
              key={`${image}-${index}`}
              className={
                selectedImage === image ? 'detail-thumbnail active' : 'detail-thumbnail'
              }
              onClick={() => setSelectedImage(image)}
              aria-label={`Show product image ${index + 1}`}
            >
             <FallbackImage
                src={image}
                alt={`${product.name} view ${index + 1}`}
             />
            </button>

          ))}

        </div>

      </div>

      <div className="detail-info">

        <Link to="/#collection" className="back-to-collection">
              ← Back to Collection
       </Link>
       d
        <p className="product-category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <h2>
          Rs. {product.price.toLocaleString('en-LK')}
        </h2>

        <p>{product.description}</p>

       <div className="product-specifications">

            <h3>Product Specifications</h3>

              {Object.entries(product.specifications || {}).map(
                  ([label, value]) => (
      <div className="specification-row" key={label}>
           <strong>{label}</strong>
         <span>{value}</span>
      </div>
    )
  )}

</div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-button"
        >
          Enquire on WhatsApp ↗
        </a>

      </div>

    </section>
  )
}

export default ProductDetails
