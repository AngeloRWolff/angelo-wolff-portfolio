import React, { Component } from 'react';
import './Contact.css'
class InputArea extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <div className = 'form'>           
                <textarea placeholder = {this.props.title} type= 'text' className = 'input-area'></textarea>
            </div>
        );
    }
}

export default InputArea;