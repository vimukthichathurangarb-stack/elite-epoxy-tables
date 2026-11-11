
import { useState, useEffect } from 'react'

function FallbackImage({ src, alt, className }) {

  const fallbackImage = '/images/image-placeholder.svg'

  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    setShowFallback(false)
  }, [src])

  const imageSrc = showFallback || !src
    ? fallbackImage
    : src

  function handleImageError() {

    if (imageSrc !== fallbackImage) {
      console.log('Original image failed. Loading placeholder.')
      setShowFallback(true)
    } else {
      console.error('Placeholder image also failed to load.')
    }

  }

  return (
    <img
      src={imageSrc}
      alt={alt || 'Product image'}
      className={className}
      onError={handleImageError}
    />
  )
}

export default FallbackImage
