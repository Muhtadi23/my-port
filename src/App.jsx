import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
      </div>

    </>
  )
}

export default App
