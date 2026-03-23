import { useEffect } from 'react'
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
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Prevent horizontal overflow
    document.body.style.overflowX = 'hidden'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
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
