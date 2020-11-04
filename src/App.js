import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Background from './Background/Background';
import HeaderLogo from './header/HeaderLogo';
import Navbar from './navbarcomponents/pages/Navbar';
import FooterComp from './Footer/FooterComp';

function App() {
  return (
    <Router>
      <header>
      <HeaderLogo />
      <Navbar />
      </header>
      <Background />
      <footer>
        <FooterComp />
      </footer>
    </Router>
  );
}

export default App;
