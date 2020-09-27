import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './pages/Layout';
import  Idle  from './pages/Idle';
import  About  from './pages/About';
import Projects  from './pages/Projects';

export default class App extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Idle} />
        <Route path='/counter' component={About} />
        <Route path='/fetch-data' component={Projects} />
      </Layout>
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
//export default App;
