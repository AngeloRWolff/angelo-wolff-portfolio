import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Idle from './pages/Idle';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (


    <div className="App">
      <Router>
        

        <div>
      
          <ul className="App-header Fadein-top">           
            <Link to={'/about'} className="Fadein-top"> About</Link>           
            <Link to={'/projects'} className="Fadein-top">Projects</Link>
            <Link to={'/contact'} className="Fadein-top">Contact </Link>
          </ul>

          <Switch>
            <Route exact path='/' component={Idle} /> 
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact}/>
         
          </Switch>
        </div>
      </Router>
    </div>

  );
}



export default App;
