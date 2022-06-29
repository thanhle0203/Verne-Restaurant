import React from 'react';
import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
  </Router>
    
)
  

export default App;