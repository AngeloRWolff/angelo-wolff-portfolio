import React, { Component } from 'react';
import '..//css/Projects.css'

import rightArrow from '..//assets/images/rightarrow.png'
import leftArrow from '..//assets/images/leftarrow.png'

import {data} from '../data/project-data'
import {navStyle, navSelected,hidden,showing,zoomed} from '../states/Projects/Projects.style'


class Projects extends Component {
    constructor(props, context) {
        super(props, context);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.circleNav = this.circleNav.bind(this);
        this.growImage = this.growImage.bind(this);
        this.drawImages = this.drawImages.bind(this);
        //this.autoCycle = this.autoCycle.bind(this); Disabled
        //this.delayCycle = this.delayCycle.bind(this); Disabled
        //this.continueCycle = this.continueCycle.bind(this); Disabled
       
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
    }
  
    next() {
      
        var index = this.state.index + 1;
        if (index > data.length - 1)
            index = 0;

        this.setState({ currentData: data[index] })
        this.setState({ index: index })
        this.setState({ linkIndex: 0 })
        index = 0;
        var mutableImageStates = this.state.imageStates;
        mutableImageStates.forEach(element => {
            this.setState({...mutableImageStates[index] = hidden})
            index++;
        });
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
        index = 0;
        var mutableImageStates = this.state.imageStates;
        mutableImageStates.forEach(element => {
            this.setState({...mutableImageStates[index] = hidden})
            index++;
        });
        this.setState({...mutableImageStates[this.state.currentIndex] = hidden});
        setTimeout(function(){
             this.setImage(0)
            }.bind(this),  1250);
    }
   
    id() { return Math.random() }

    growImage(i)
    {
       var mutableImageStates = this.state.imageStates;
       this.setState({allowedCycle:false})
       this.setState({...mutableImageStates[this.state.currentIndex] = zoomed})
        
    }
    shrinkImage()
    {
        var mutableImageStates = this.state.imageStates;
        this.setState({...mutableImageStates[this.state.currentIndex] = showing})
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
        /* Disabled auto cycling
        if (!isAutomaticSetter)
           i=this.nextImage()
              */ 
            var mutableImageStates = this.state.imageStates;
            var mutableNavStates = this.state.navStates;
        if (this.state.lastSetIndex !== -1 || this.state.lastSetIndex === i)
        {
          this.setState({...mutableImageStates[this.state.lastSetIndex] = hidden});
          this.setState({...mutableNavStates[this.state.lastSetIndex] = navStyle});
        }
          this.setState({...mutableImageStates[i] = showing});
          this.setState({...mutableNavStates[i] = navSelected})
          this.setState({currentIndex:i})
          this.setState({lastSetIndex: i})
           /* Disabled auto cycling
          if (isAutomaticSetter)
          this.setState({allowedCycle:false})
           */               
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
        /* Disabled auto cycling
        this.setState({allowedCycle:true})
        setInterval(function(){
            if (this.state.allowedCycle == true){
             this.setImage(this.nextImage(), false)
            }
           }.bind(this), 3000)
           */
    }

    continueCycle()  {
        this.setState({allowedCycle:true})     
    }

    circleNav() {
        var nav = []
        var imageIndex = 0;
        data[this.state.index].links.forEach(element => {
            
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
            
        })
        return nav;
    }

    render() {
        return (
            <div style = {{textAlign: 'center', height: window.innerHeight, minHeight: '700px', }}>
                
                      <div>             
                         <img className = 'img-nav-left' src = {leftArrow} onClick = {this.prev} alt = 'left-proj-nav'></img>
                         <div className = 'header'>{this.state.currentData.name}</div>
                         <img className = 'img-nav-right' src = {rightArrow} onClick = {this.next} alt = 'right-proj-nav'></img>
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

export default Projects;