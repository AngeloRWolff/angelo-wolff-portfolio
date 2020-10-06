import React, { Component, createElement } from 'react';
import '..//App.css'

import { render } from 'react-dom';


import githubIcon from '../assets/images/githubContactIcon.png';
import facebookIcon from '../assets/images/facebookContactIcon.png';
import youtubeIcon from '../assets/images/youtubeContactIcon.png';

import name from '..//assets/audio/name.mp3'

import voiceIcon from '..//assets/images/voice.png'

import downloadIcon from '..//assets/svg/download.svg'
function CreateTrail(e) {
    console.log(e)
}

function enlight() {

}
function garbageMouseOver() {
    alert('you entered');
}
function collideInto(element) {

}





function destroyOverTime(element) {
    element.id = "tail";
    var opacity = 1;  // initial opacity
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            //element.style.display = 'none';
            element.remove();
        }
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
    }, 75);
}


var gitHubElementContainer = {
    width: '100%',
    height: '40px',
    marginTop: '5px',
    borderRadius: '5px',
    backgroundColor: '#333333',
}

var inText = {
    color : 'rgb(220,220,220)'
}
var nibbleSpawnInterval = 3000;
var headPointerColor = "#0e819e"
function _spawnNibbles() {
    var timer = setInterval(function () {
        var context = document.getElementById('context');
        var nibbleElement = document.createElement('nib');
        var size = getRandomSize(context.clientHeight, context.clientWidth);
        var location = getRandomLocation(context.clientWidth, context.clientHeight);
        // console.log(size);
        nibbleElement.style.width = `40px`;
        nibbleElement.style.position = "absolute"
        nibbleElement.style.backgroundColor = "#d6be37"
        nibbleElement.style.height = `40px`;
        nibbleElement.style.borderRadius = "50%";

        nibbleElement.addEventListener("mouseenter", function () {
            nibbleElement.style.backgroundColor = "#ffffff"
            nibbleElement.remove();
        })
        nibbleElement.style.left = location.xLoc + "px";
        nibbleElement.style.top = location.yLoc + "px";
        nibbleElement.style.zIndex = 200;
        console.log("Spawned a nibble");
        context.appendChild(nibbleElement);
        // fadeAnimation(nibbleElement);
    }, nibbleSpawnInterval)
}

function _eatNibble(nibbleElement) {
    nibbleElement.style.backgroundColor = "#0b5568"

}

class Idle extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            x: 0,
            y: 0,
            gameOn: false,
            hitHubElements: 'Test',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.play = this.play.bind(this);
        this._startAnimation = this._startAnimation.bind(this);
        this.gitHubLinkClick = this.gitHubLinkClick.bind(this);
        this.fetchGithub();

    }

    onFormSubmit() {
        alert("Form Submitted" + this.state.gameOn);
        this.state.gameOn = true;

    }


    openPage(link) {
        window.open(link, '_blank')
    }

    gitHubTitle(title) {
        return React.createElement('div', {
            style: {

                display: 'inline-block',
                color: 'rgb(220,220,220)',
                width: '75%',
                height: '20px',
                textAlign: 'right',
                transform: 'translateX(-5px)'
            }
        }, title)
    }
    gitHubLinkClick(link) {
        this.openPage(link);
        console.log("link");
        console.log(link);
    }
    gitHubLink(link) {
        return React.createElement('button', {
            style: {
                width: '25%',
                height: '100%',
                border: 0,
                borderRadius: '5px',
                textAlign: 'center',
                color: 'rgb(220,220,220)',
                backgroundColor: '#2e5f75',

            },
            onClick: () => this.gitHubLinkClick(link)
        }, 'View')
    }
    fetchGithub() {
        fetch('https://api.github.com/users/AngeloRWolff/repos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var gitHubElements = [];
                var index = 10001;
                console.log(data.name);
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];
                        gitHubElements.push(
                            React.createElement('div', {
                                style: gitHubElementContainer,
                                key: index,
                            }, this.gitHubTitle(element.name), this.gitHubLink(element.clone_url))
                        )
                        index++;
                    }
                }
                this.setState({ hitHubElements: gitHubElements })

            })
            .catch(error => console.error(error))


    }

    _startAnimation() {
        console.log('animation started')
        var timer = setInterval(function () {
            try {
                var context = document.getElementById('context');
                var animationBlock = document.createElement('gh');
                var size = getRandomSize(context.clientHeight, context.clientWidth);
                var location = getRandomLocation(context.clientWidth, context.clientHeight);

                animationBlock.style.width = `${size}px`;
                animationBlock.style.position = "absolute"
                animationBlock.style.backgroundColor = "#25232c"
                animationBlock.style.height = `${size}px`;
                animationBlock.style.left = location.xLoc + "px";
                animationBlock.style.top = location.yLoc + "px";
                animationBlock.style.zIndex = -100;

                document.body.appendChild(animationBlock);
                fadeAnimation(animationBlock);
            }
            catch (err) {
                console.log(err)
            };
            //alert(`${context.clientWidth} x ${context.clientHeight}`);
        }, 100);
    }






    play() {
        console.log('playing name')
        document.getElementById('playName').play();
    }
    render() {

        const x = this.state.x;
        const y = this.state.y;
        const gameOn = this.state.gameOn;
        return (
            <div style={{ textAlign: 'center', height: window.innerHeight, minHeight: '600px', }}>
                <div id="coords"></div>
                <audio id="playName" src={name}></audio>
                <div className='orbit'>
                    <div style={{ transform: 'translateX(-15px)', display: 'inline-block' }}>Hello, my name is</div>
                    <div style={{ transform: 'translateX(-10px)', display: 'inline-block', color: '#1593b3' }}> Angelo Wolff</div>
                    <img style={{ transform: 'translateX(-10px)', marginLeft: '5px', position: 'absolute', width: '30px', height: '30px' }} src={voiceIcon} onClick={this.play}></img>
                </div>
                <div className = "inText">Download my document cv below</div>
                <button className = 'download'>
                        <img src = {downloadIcon} className = 'download-img'></img>Download CV.PDF
                    </button>
                    <section style = {{height:'40px'}}></section>
                


               
                   
                <section style = {{height:'40px'}}></section>
                
                <div className = "inText">View my other github projects</div>
                <div className='container'>
                    {this.state.hitHubElements}
                </div>

                <div>
                <button className = 'download'>
                        <img src = {downloadIcon} className = 'download-img'></img>Download This Project
                    </button>

                    
                    </div>
            </div>


        );

    }

}

/*
Boundcing Circle animation
   <div className = 'small-ball'></div>
             <div className = 'small-ball2'></div>
             <div className = 'small-ball3'></div>

contact href 
     <img style = {{marginRight: '5px',width: '50px' , height: '50px'}} src = {githubIcon}></img>
            <img style = {{marginRight: '5px',width: '50px' , height: '50px'}}src = {facebookIcon}></img>
            <img style = {{marginRight: '5px',width: '50px' , height: '50px'}}src = {youtubeIcon}></img>  


*/
document.onkeydown = checkKey;

function getRandomSize(height) {
    return Math.random() * height / 5 + 20;
}
function getRandomLocation(width, height) {
    var location = {
        xLoc: Math.random() * width,
        yLoc: document.documentElement.scrollTop + Math.random() * height
    }
    return location;
}
function fadeAnimation(element) {
    try {
        var opacity = 1;  // initial opacity
        var timer = setInterval(function (error) {

            if (opacity <= 0.01) {
                clearInterval(timer);
                element.style.display = 'none';
                element.remove();
            }
            element.style.opacity = opacity;

            element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
            opacity -= opacity * 0.01;

        }, 10)
    } catch{

    }
}

function absoluteMinumumSize(size, width, height) {

}

function checkKey(e) {

}



function createAnimationObject() {

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