import React, { Component, createElement } from 'react';
import '..//App.css'

import { render } from 'react-dom';

function CreateTrail(e)
{
  console.log(e)
}

function enlight()
{

}
function garbageMouseOver()
{
    alert('you entered');
}
function collideInto(element)
{
   
}



function Tail2()
{
    var timer = setInterval(()=>
    {
        //get location
        //thro wthingy
    }, 10)
}

function Tail(x, y) {
    var canemit = false;
    var context = document.getElementById('context');
    var tailElement = document.createElement('gh');
    var width = tailElement.style.width;
    var height = tailElement.style.height;
  
    tailElement.id = "head"
    tailElement.style.width = "30px";
    tailElement.style.position = "absolute"
    tailElement.style.backgroundColor = headPointerColor;
    tailElement.style.height = "30px";
    tailElement.style.left= x-15 + "px";
    tailElement.style.top = y +15 + "px";
    tailElement.style.borderRadius = "50%"

    context.appendChild(tailElement);
    destroyOverTime(tailElement);
 
    
}
function destroyOverTime(element) {
    element.id = "tail";
    var opacity = 1;  // initial opacity
    var timer = setInterval(function () {
        if (opacity <= 0.1){
            clearInterval(timer);
            //element.style.display = 'none';
            element.remove();
        }
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
    }, 75);
}

var nibbleSpawnInterval = 3000;
var headPointerColor = "#0e819e"
function _spawnNibbles()
{
    var timer = setInterval(function () {
    var context = document.getElementById('context');
    var nibbleElement = document.createElement('nib');
    var size = getRandomSize(context.clientHeight, context.clientWidth);
    var location = getRandomLocation(context.clientWidth,context.clientHeight);
   // console.log(size);
    nibbleElement.style.width = `40px`;
    nibbleElement.style.position = "absolute"
    nibbleElement.style.backgroundColor = "#d6be37"
    nibbleElement.style.height = `40px`;
    nibbleElement.style.borderRadius = "50%";
    
    nibbleElement.addEventListener("mouseenter", function()
    {
        nibbleElement.style.backgroundColor = "#ffffff"
        nibbleElement.remove();
    })
    nibbleElement.style.left= location.xLoc + "px";
    nibbleElement.style.top = location.yLoc + "px";
    nibbleElement.style.zIndex = 200;
    console.log("Spawned a nibble");
    context.appendChild(nibbleElement);
   // fadeAnimation(nibbleElement);
    },nibbleSpawnInterval)
}

function _eatNibble(nibbleElement)
{
    nibbleElement.style.backgroundColor = "#0b5568"
   
}

class Idle extends Component {

   constructor(props, context) {
       super(props, context);

    this.state = {x: 0, y: 0, gameOn:false};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this._startGame = this._startGame.bind(this);
    this._startAnimation = this._startAnimation.bind(this);
    this._endGame = this._endGame.bind(this);
   }

   onFormSubmit() {
    alert("Form Submitted" + this.state.gameOn);
    this.state.gameOn = true;

  }

      _startGame() {
      
        _spawnNibbles();  
        if (this.state.gameOn == true)
        {
        this.state.gameOn = false;
        document.body.style.cursor = 'default';
        }
        else
        {        
        this.state.gameOn = true;
        //document.body.style.cursor = 'none';
        }
        this.forceUpdate();   
               
        };

     

        _endGame()
        {
            this.state.gameOn = false;
        }
   
    
    _startAnimation()
    {
        
        var timer = setInterval(function () {
            try
        {
        var context = document.getElementById('context');
        var animationBlock = document.createElement('gh');
        var size = getRandomSize(context.clientHeight, context.clientWidth);
        var location = getRandomLocation(context.clientWidth,context.clientHeight);
       // console.log(size);
        animationBlock.style.width = `${size}px`;
        animationBlock.style.position = "absolute"
        animationBlock.style.backgroundColor = "#25232c"
        animationBlock.style.height = `${size}px`;
        animationBlock.style.left= location.xLoc + "px";
        animationBlock.style.top = location.yLoc + "px";
        animationBlock.style.zIndex = -100;
        
        document.body.append(animationBlock);
        fadeAnimation(animationBlock);
        }
        catch{

        };
        //alert(`${context.clientWidth} x ${context.clientHeight}`);
        },250);
    }

    
  
   
   _onMouseMove(e){
    var bounds = e.target.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    var y = e.clientY - bounds.top;
       this.setState({x: x, y: y})
       Tail(x, y);
   }


    render() {
        const x = this.state.x;
        const y = this.state.y;
        const gameOn = this.state.gameOn;
        return (
            <div style = {{height : '20px'}}>
            <div id= "coords"></div>
         
       
             
            <button onClick = {this._startAnimation}>Click To Start Animation</button>       
            {this.state.gameOn ? <div id = "touchpane" style = {{opacity : "0%"}} className = "Fit" onMouseMove={this._onMouseMove.bind(this)}> </div> : null}

            <div className="diamond-narrow"></div>
            </div>

          
        );
    }
}


document.onkeydown = checkKey;

function getRandomSize(height)
{
    return Math.random() * height/5 +20;
}
function getRandomLocation(width, height)
{
    var location = {
        xLoc: Math.random()*width,
        yLoc: document.documentElement.scrollTop + Math.random()*height
    }
    return location;
}
function fadeAnimation(element)
{
    try
    {
    var opacity = 1;  // initial opacity
    var timer = setInterval(function (error) {    
        
        if (opacity <= 0.01){
            clearInterval(timer);
            element.style.display = 'none';
            element.remove();
        }
        element.style.opacity = opacity;
     
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.01;
        
    }, 10)
}catch{

}
}

function absoluteMinumumSize(size, width, height)
{

}

function checkKey(e) {

}



function createAnimationObject()
{
  
}


function move() {
    var gameContainer = document.getElementById('gameContainer').getBoundingClientRect();
    var snake = document.getElementById('snakeElement');
    var snakePosition = document.getElementById('snakeElement').getBoundingClientRect();
    snake.style.left = snakePosition.x + 1 + "px"
    //console.log(snakePosition.x + 1);

    if (snakePosition.x > gameContainer.width)
        snake.style.left = "0px";
    if (snakePosition.x < gameContainer.x)
        snake.style.left = gameContainer.width + "px";
    if (snakePosition.y > gameContainer.height)
        snake.style.top = "0px";
    if (snakePosition.y < gameContainer.y)
        snake.style.top = gameContainer.height + "px";
}


export default Idle;