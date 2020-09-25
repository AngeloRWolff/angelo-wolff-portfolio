import React, { Component } from 'react';
import './/..//..//css/LikeBox.css';
class LikeBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.render = this.render.bind(this);
        this.state = {
            boxStyle: "default",
            boxContent: this.props.content
        }
    }

    render() {

        return (
            <div className={this.state.boxStyle}>
                {this.state.boxContent}
            </div>
        );
    }
}

export default LikeBox;