import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
const basename = process.env.NODE_ENV === 'production' ? '/Portfolio' : '/';

function App() {
 return (
 <Router basename="/Portfolio">
<Navbar />
<div className="page-content">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</div>
 </Router>
 );
}

export default App;
