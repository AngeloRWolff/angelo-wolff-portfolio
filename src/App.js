import React, { Component } from 'react';
import './App.css';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Idle from './pages/Idle.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Idle} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
   
      <NavItem>
      <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
      </NavItem>
     <NavItem>
      <NavLink tag={Link} className="text-dark" to="/about">Counter</NavLink>
     </NavItem>
     <NavItem>
      <NavLink tag={Link} className="text-dark" to="/projects">Fetch data</NavLink>
      </NavItem>
     </Router>
    </div>
    )
  }
  
export default App;
