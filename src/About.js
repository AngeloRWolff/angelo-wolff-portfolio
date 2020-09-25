// Home.js

import React, { Component } from 'react';
import './App.css';
const Test = require('./components/test');


function retract() {

  document.getElementById("p1").style = "Pbar";
}

function liveanimate()
{
  var element = document.getElementById('xyz');
  
  element.style = "Fadein-left";
  Stopwatch 
}

var languageObject =
{
  Csharp: 90,
  Java: 85,
  Python: 70,
  Javascript: 70,
  CPP: 65,
  C: 50,
  HTML: 40,
  CSS: 30
}

class Home extends Component {
  render() {


    return (

      <body>
        <div >
          <h2>Home</h2>
          <h2>Short Description</h2>
           Backend
           Server
           Database
           FrontEnd
          <h2>-----------------</h2>
          <h2>Programming Skills Animated Graph</h2>
          C#
          Java
          Javascript
          Python
          HTML
          CSS
          C++
          C
          </div>
         <div onMouseOver = {liveanimate} id = 'xyz'>Hello2</div>
         
          </body>
         
    );

  }

}
export default Home;