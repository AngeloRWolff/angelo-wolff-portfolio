import React, { Component } from 'react';
import './T.css'

import mbIntro from '../assets/images/magnus-botson/intropgn.png'
import mbTheme from '../assets/images/magnus-botson/theme.png'
import mbPgn from '../assets/images/magnus-botson/endpgn.png'
import mbMove from '../assets/images/magnus-botson/move.png'

import tbInitial from '../assets/images/tiny-block/initial.png'
import tbTransparency from '../assets/images/tiny-block/transparency.png'


import rightArrow from '..//assets/images/rightarrow.png'
import leftArrow from '..//assets/images/leftarrow.png'

var data = [
    { 
        name: 'Discord Chessbot',
        description: 'A discord bot that features player vs player chess games and player vs computer chess games, cross server play, unstructured data storage, notation commands and tracking, game evaluation, ranking (ELO), high speed image rendering using canvas, high speed socket connection to c# server that runs binary engine(stockfish) with leela chess zero (kibitzer) that uses thread pools and locking',
        links: [{link: "https://www.youtube.com/embed/7eK0D8CX7qM",type:'iframe'},
                {link: mbIntro,type:'img'},
                {link: mbMove,type:'img'},
                {link: mbPgn,type:'img'},
                {link: mbTheme,type:'img'},               
            ]
    
            
    },
    {
        name: 'Tiny Blocks',
        description: 'Tiny block is a realtime image manipulator, that makes use of bit locking techniques and unsafe direct memory access to modify image data streams, designed for use in sprite manipulation for aniamated objects in game engines',
        links: [{link: "https://www.youtube.com/embed/LhoIjvitqYk",type:'iframe'},
                {link: tbInitial,type:'img'},
                {link: tbTransparency,type:'img'}]
               
    },
    {
        name: 'Chess Engine',
        description: 'A simple chess engine that only knows the rules of movement, there are no rules defined for compelex chess logic. The goal was to develop an adaptable cost based evaluation for chess positions at a single depth',
        links: [{link: "https://www.youtube.com/embed/WMCUib038MQ",type:'iframe'},
        ]
    },
   
]
var navStyle = {
    width: 50,
    marginRight:'3px',
    height: 50,
    marginTop:305,
    display: 'inline-block',
    borderRadius: "50%",
    transitionDuration: '0.5s',
    backgroundColor: '#363636',
    zIndex: 100,
}
var navSelected = {
    marginRight:'3px',
    width: 50,
    height: 50,
    marginTop:305,
    display: 'inline-block',
    borderRadius: "10px",
    transitionDuration: '0.5s',
    backgroundColor: '#3c647d',
    zIndex: 100,
}

var hidden = {
    height: 250,
    width: 300,
    transitionDuration: "0.2s",
    border: '0',
    position: 'absolute',
    transform: 'translateX(-200px)',
    opacity: 0,
    zIndex:-100,
    borderRadius: '25px',
}

var showing = {
   // transform: 'translateX(-150px)',
    border: '0',
    height: 300,
    width: 350,
    display: 'inline-box',
    transform: 'translateX(-50%)',
    margin: 'auto',
    zIndex:100,
    boxShadow: "0 8px 6px -6px black",
    transitionDuration: "0.4s",
    borderRadius: '25px',
    position: 'absolute',
    opacity: 1,
   
}
var zoomed = { 
    border: '0',
    height: 400,
    width: 450,
    display: 'inline-box',
    transform: 'translateX(-50%)',
    margin: 'auto',
    
    boxShadow: "0 8px 6px -6px black",
    transitionDuration: "0.4s",
    borderRadius: '25px',
    position: 'absolute',
    opacity: 1,

}
var cs = {
    transitionDuration: "2s",
   // transform: 'translateX(100px)',
    width: 100
}
class T extends Component {
    constructor(props, context) {
        super(props, context);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.circleNav = this.circleNav.bind(this);
        this.growImage = this.growImage.bind(this);
        this.drawImages = this.drawImages.bind(this);
        this.autoCycle = this.autoCycle.bind(this);
        this.delayCycle = this.delayCycle.bind(this);
        this.continueCycle = this.continueCycle.bind(this);
       
        console.log(data);
        this.state = {
            index: 0,
            currentData: data[0],
            links: data[0].links,
            linkIndex: 0,
            imageStates: [],
            navStates: [],
            currentIndex: 0,
            lastSetIndex: -1,
            allowedCycle: false,

        }
       // this.checkCycleActivity();
        
    }

    checkCycleActivity()
    {
        
    }
    next() {
      
        var index = this.state.index + 1;
        if (index > data.length - 1)
            index = 0;

        this.setState({ currentData: data[index] })
        this.setState({ index: index })
        this.setState({ linkIndex: 0 })
        var index = 0;
        this.state.imageStates.forEach(element => {
            this.setState({...this.state.imageStates[index] = hidden})
            index++;
        });
        this.setState({...this.state.imageStates[this.state.currentIndex] = hidden});
        setTimeout(function(){
             this.setImage(0)
            }.bind(this),  1000);
            

    }

    prev()
    {
        var index = this.state.index - 1;
        if (index < 0)
            index = data.length-1;

        this.setState({ currentData: data[index] })
        this.setState({ index: index })
        this.setState({ linkIndex: 0 })
        var index = 0;
        this.state.imageStates.forEach(element => {
            this.setState({...this.state.imageStates[index] = hidden})
            index++;
        });
        this.setState({...this.state.imageStates[this.state.currentIndex] = hidden});
        setTimeout(function(){
             this.setImage(0)
            }.bind(this),  1000);
    }
   
    id() { return Math.random() }

    growImage(i)
    {
       console.log(i)
       this.setState({allowedCycle:false})
       this.setState({...this.state.imageStates[this.state.currentIndex] = zoomed})
        
    }
    shrinkImage()
    {
        this.setState({...this.state.imageStates[this.state.currentIndex] = showing})
    }

    drawImages() {
        var images = [];
        var index =0;
        data[this.state.index].links.forEach(element => {
            this.state.imageStates.push(hidden);
            var img = React.createElement(element.type, {
                src: element.link,
                style: this.state.imageStates[index],
                id: `image${index}`,
                onMouseEnter: ()=>this.growImage(),
                onMouseLeave: ()=>this.shrinkImage()
            })
            index++;
            images.push(img)
            
        });
        return images;
    }
    setImage(i, isAutomaticSetter) {
        if (!isAutomaticSetter)
       // i=this.nextImage()
        console.log(i);
        
        
        if (this.state.lastSetIndex != -1 || this.state.lastSetIndex == i)
        {
          this.setState({...this.state.imageStates[this.state.lastSetIndex] = hidden});
          this.setState({...this.state.navStates[this.state.lastSetIndex] = navStyle});
        }
          this.setState({...this.state.imageStates[i] = showing});
          this.setState({...this.state.navStates[i] = navSelected})
          this.setState({currentIndex:i})
          this.setState({lastSetIndex: i})
          if (isAutomaticSetter)
          this.setState({allowedCycle:false})
              
    }
    nextImage()
    {
        if (this.state.currentIndex < this.state.currentData.links.length-1)
            return this.state.currentIndex+1;
            else{return 0}
    }
    componentDidMount()
    {
        this.setImage(0);
        //this.setState({allowedCycle:true})
        //setInterval(function(){
        //    if (this.state.allowedCycle == true){
         //    this.setImage(this.nextImage(), false)
         //    console.log('setting automatically' + this.nextImage());
         //   }
          // }.bind(this), 3000)
    }
    autoCycle()
    {
        
       
    }
    delayCycle()
    {
        
    }
    continueCycle()
    {
        this.setState({allowedCycle:true}) 
        
    }
    circleNav() {
        var nav = []
        var imageIndex = 0;
        data[this.state.index].links.forEach(element => {
            {
                this.state.navStates.push(navStyle);
                var id = this.id();
                var navcircle = React.createElement('div', {
                    id: id,
                    index: imageIndex,
                    style: this.state.navStates[imageIndex],                   
                    onMouseEnter: ()=> this.setImage(document.getElementById(id).getAttribute('index'),true),                 
                    onMouseLeave: ()=>this.continueCycle(),
                })
                nav.push(navcircle);
                imageIndex++;
            }
        })
        return nav;
    }

    render() {
        return (
            <div id = 'asd' style = {{textAlign: 'center', height: window.innerHeight, minHeight: '600px', }}>
                
                      <div>             
                         <img className = 'img-nav-left' src = {leftArrow} onClick = {this.prev}></img>
                         <div className = 'header'>{this.state.currentData.name}</div>
                         <img className = 'img-nav-right' src = {rightArrow} onClick = {this.next}></img>
                     </div>  

                
                

                    
                    
                 
                    <div className = 'description'>
                        {this.state.currentData.description}
                    </div>
                    <div style={{position:'absolute', width: '100%', height:'400px', textAlign:'center'}}>
                       <div> {this.drawImages()}</div>
                       <div> {this.circleNav()}</div>
                    </div>
                   
              
                    </div>
           
        );
    }
}

export default T;