
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard.jsx'

function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    async function fetchProducts() {

      try {
        const response = await fetch('/products.json')

        if (!response.ok) {
          throw new Error('Could not load products')
        }

        const data = await response.json()

        setProducts(data)

      } catch (error) {
        setError(error.message)

      } finally {
        setLoading(false)
      }
    }

    fetchProducts()

  }, [])

  return (
    <section className="products-section" id="collection">

      <div className="section-heading">
        <p>OUR COLLECTION</p>
        <h2>Designed to be <em>distinctive.</em></h2>
        <span>Furniture that brings natural beauty into your space.</span>
      </div>

      {loading && <p>Loading products...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products available.</p>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  )
}

export default Products

