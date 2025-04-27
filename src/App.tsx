import './App.scss'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import SiteAnim from './components/SiteAnim/SiteAnim'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SiteAnim />
      <Footer />
    </>
  )
}

export default App