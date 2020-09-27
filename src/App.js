import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Idle from './pages/Idle.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      page: Idle
    }
  }
  
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/contact">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );  
  }
}

/*

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


*/
export default App;
