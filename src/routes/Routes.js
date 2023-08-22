import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Resume from '../pages/resume/Resume';
import Portfolio from '../pages/portfolio/Portfolio';
import Blog from '../pages/blog/Blog';

function MainRoutes() {
  return (
    <div className="prt-body">
        <Routes>
            <Route exact path="/" element={ <About /> } />
            <Route path="/resume" element={ <Resume />} />
            <Route path="/portfolio" element= { <Portfolio /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/contact" element= { <Contact /> } />
        </Routes>
    </div>
  )
}

export default MainRoutes