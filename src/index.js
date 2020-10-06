import React from 'react';
import ReactDOM from 'react-dom';



import Idle from './pages/Idle';
import About from './pages/About';

import Contact from './pages/Contact';
import Menu from './components/menu'
import * as serviceWorker from './helper/serviceWorker';
import Interests from './pages/Interests';
import T from './pages/T'
var $ = require("jquery");
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

function scroll()
{
  
  
}
var show = false;

/*



 {scroll()}
      <Menu title = 'Introduction'></Menu>
      <Idle></Idle>
      <Menu title = 'Skills'></Menu>
      <About ></About>
      <Menu title = 'Projects'></Menu>
      <T></T>
      <Menu title = 'Interests and Hobbies'></Menu>
      <Interests  ></Interests>
      <Menu title = 'Contact'></Menu>
      <Contact></Contact>

*/
ReactDOM.render(
  <div>
      
      <Menu title = 'Introduction'></Menu>
      <Idle></Idle>
      <Menu title = 'Skills'></Menu>
      <About ></About>
      <Menu title = 'Projects'></Menu>
      <T></T>
      <Menu title = 'Interests and Social'></Menu>
      <Interests  ></Interests>
      <Menu title = 'Contact'></Menu>
      <Contact></Contact>
      
     
 
  </div>,
  rootElement);



    function getCodeWar()
    {
      
      
    }

    
    
  /*


      <Menu title = 'Contact'></Menu>
      <Contact></Contact>

  */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





