import React, { Component } from 'react';
import './Contact.css'

class InputBox extends Component {
    constructor(props, context) {
        super(props, context); 
        console.log(props);     
    }
    
    
    render() {
        return (           
            <div className = "form">              
                <input autoComplete = 'on' placeholder = {this.props.title} id = {this.props.id} name ={this.props.name} type= {this.props.type} className = 'input-field'></input>
            </div>
        );
    }
}

export default InputBox;