import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SponsorsBar from './components/SponsorsBar'
import Address from './components/Address'
import Teams from './components/Teams'
import Trainings from './components/Trainings'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <SponsorsBar />
        <Address />
        <Teams />
        <Trainings />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

