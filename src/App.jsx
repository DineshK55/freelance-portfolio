
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

import './styles/App.css'

function App() {
  return (
    <main className="portfolio">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />

      <Footer />
    </main>
  )
}

export default App
