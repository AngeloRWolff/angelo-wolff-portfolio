import React from 'react';
import ReactDOM from 'react-dom';
import Idle from './pages/Idle';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu'
import * as serviceWorker from './helper/serviceWorker';
import Interests from './pages/Interests';
import Projects from './pages/Projects'
import './css/index.css'

const rootElement = document.getElementById('root');
ReactDOM.render(
  <div>    
      <Menu title = 'Introduction'></Menu>
      <Idle></Idle>
      <Menu  title = 'Skills'></Menu>
      <About></About>
      <Menu  title = 'Projects'></Menu>
      <Projects></Projects>
      <Menu  title = 'Interests and Social'></Menu>
      <Interests ></Interests>
      <Menu  title = 'Contact'></Menu>
      <Contact></Contact>
  </div>,
  rootElement);

serviceWorker.unregister();





