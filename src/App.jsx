import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {


  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Services></Services>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
