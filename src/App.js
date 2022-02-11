import React from "react"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Divider from "./Components/Divider";
import Aproach from "./Aproach";
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <Portfolio />
     <Blog/>
     <Divider />
     <Aproach />
     <Modal />
    </div>
  );
}

export default App;
