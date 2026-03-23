import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import SponsorsBar from './components/SponsorsBar'
import Teams from './components/Teams'
import Trainings from './components/Trainings'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
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
        <StatsBanner />
        <SponsorsBar />
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
