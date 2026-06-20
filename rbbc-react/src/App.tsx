import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SponsorsBar from './components/SponsorsBar'
import Teams from './components/Teams'
import Trainings from './components/Trainings'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SponsoringPage from './SponsoringPage'
import PhotosPage from './PhotosPage'
import ThreeXThreePage from './ThreeXThreePage'

function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.overflowX = 'hidden'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sponsoring" element={<SponsoringPage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/3x3" element={<ThreeXThreePage />} />
    </Routes>
  )
}

export default App
