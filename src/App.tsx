import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedBuild } from './components/FeaturedBuild'
import { Catalog } from './components/Catalog'
import { ValueProps } from './components/ValueProps'
import { Footer } from './components/Footer'
import { SplashScreen } from './components/SplashScreen'
import { asset } from './lib/asset'

/** Root page composition for Yard Components. */
function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [siteReady, setSiteReady] = useState(false)

  return (
    <div className="relative min-h-screen bg-yc-black text-yc-white">
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false)
            setSiteReady(true)
          }}
        />
      )}

      {/* Fixed site-wide studio photo, dimmed under content sections */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-yc-black"
        aria-hidden
      >
        <img
          src={asset('/images/bg-pc.jpg')}
          alt=""
          className="h-full w-full object-cover object-[70%_center] opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-yc-black/65" />
      </div>

      {siteReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar />
          <main>
            <Hero />
            <FeaturedBuild />
            <Catalog />
            <ValueProps />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App
