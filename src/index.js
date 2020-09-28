import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Idle from './pages/Idle';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Menu from './components/menu'
import * as serviceWorker from './helper/serviceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');


ReactDOM.render(
  <div>
      
      <Idle></Idle>
      <Menu title = 'About Me'></Menu>
      <About></About>
      <Menu title = 'Projects'></Menu>
      <Projects></Projects>
      <Menu title = 'Contact'></Menu>
      <Contact></Contact>
  </div>,
  rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





