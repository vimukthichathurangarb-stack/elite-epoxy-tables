import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Craft from './components/Craft.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import './App.css'


function App() {
  
  const location = useLocation()

useEffect(() => {
  if (!location.hash) return

  const targetId = location.hash.substring(1)
  const target = document.getElementById(targetId)

  target?.scrollIntoView({
    behavior: 'smooth'
  })

}, [location.pathname, location.hash])
  return (
    <div className="site-shell">

      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                 <Craft />
                 <WhyChooseUs />
                <Contact />
              </>
            }
          />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="*"
            element={<h1>Page not found</h1>}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
