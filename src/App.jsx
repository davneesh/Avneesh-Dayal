import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";



function App() {
  
 return (
    <>

    <div className="w-screen relative z-0">
      <Home/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Project/>
    </div>
    <div>
      <Contact/>
    </div>
    
    </>
  )
}

export default App
