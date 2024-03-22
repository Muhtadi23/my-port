import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Skills from "./components/Skills"

function App() {


  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Skills></Skills>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
