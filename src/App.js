import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      <div className="d-flex flex-wrap">
        <Student rno={1} name="Swapnil" />
        <Student name="Akshay" city="Bangalore" />
        <Student rno={3} city="Mumbai" name="Shweta" />
        <Student rno={4} city="Delhi" />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// BrowserRouter, Routes, Route, Link

// <a href="/contact" >Contact</a>

// <Link to="/contact" >Contact </Link>