import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import SocialLinks from "./Components/SocialLinks"
import About from "./Components/About"
import Portfolio from "./Components/Portfolio"
import Experience from "./Components/Experience"
import Contact from "./Components/Contact"

function App() {


  return (
    <>
  <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio />
    <Experience />
    <Contact/>
    <SocialLinks/>

  </div>
    </>
  )
}

export default App
