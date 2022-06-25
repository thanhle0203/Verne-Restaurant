import React from 'react';
import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';
import './App.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />

    </Router>
  )
}

export default App;