import React, { Component } from 'react';
import Username from './codewars.config.json'
class CodewarsItem extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(Username)
    }
    
    fetchProfile()
    {
        fetch(`https://www.codewars.com/api/v1/users/${Username}`)
        .then(response => response.json())
        .then((output) => { 
            this.setState({chessStats: output.chess_blitz.best.rating})
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CodewarsItem;