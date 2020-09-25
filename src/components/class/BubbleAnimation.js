import React, { Component } from 'react';

class BubbleAnimation extends Component {
    constructor(props) {
        super(props);
     
    }
    
    
    render() {

        
       const circle = {
        position: "static",
        height: "50px",
        width: "50px",
        backgroundColor: "#bbb",
        borderRadius: "50%",
        display: "inline-block"
       };    
        return (
        

           
            <div onKeyDown>Hey</div>
            
        );
       
    }
}




export default BubbleAnimation;