import React, { Component } from 'react';
import './FlipCard.css'
var isFlipped = true;
var cardContainer = {
    display: 'inline-block',
    width: 240,
    height: 400,
    borderRadius: "20px",

 
    transitionDuration: "0.6s",
    transform: 'rotateY(180deg)',
    zIndex: 100,
}

var frontCard = {
    transform: 'rotateY(180deg)',
    position: 'absolute',
    display: 'inline-block',
    zIndex: 0,
    width: 240,
    height: 400,
   
    backgroundColor: "white",
    borderRadius: "25px",
     transitionDuration: "0.6s",
     opacity: 1,
}

var backCard = {
  
    opacity: 1,
    zIndex: -1,
    position: 'relative',
    display: 'inline-block',
    width: 240,
    height: 400,
    backgroundColor: "white",
    borderRadius: "25px",
    transitionDuration: "0.6s",

}
class FlipCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.rotateCard = this.rotateCard.bind(this);
        this.state = {
            card: cardContainer,
            front: frontCard,
            back: backCard,
        }
    }

    rotateCard() {
        console.log("clicked");
        console.log(isFlipped);
        if (!isFlipped) {
            //bring front to show
            
            this.setState({
                card: {
                    ...this.state.card,
                    transform: 'rotateY(180deg)'
                }
            })
            this.setState({
                front: {
                    ...this.state.front,
                    zIndex: 0,
                    opacity: 1,
                }
            })
            this.setState({
                back: {
                    ...this.state.back,
                    zIndex: -1,
                    opacity: 0,
                }
            })           
            isFlipped = !isFlipped;
        } else {
            
            this.setState({
                card: {
                    ...this.state.card,
                    transform: 'rotateY(0deg)'
                }
            })
            this.setState({
                front: {
                    ...this.state.front,
                    zIndex: -1,
                    opacity: 0,
                }
            })
            this.setState({
                back: {
                    ...this.state.back,
                    zIndex: 0,
                    opacity: 1,
                }
            })
            isFlipped = !isFlipped;
        }

        

    }
    createFront() {
        var card = React.createElement('div', {
            style: this.state.front,
            //  onClick: this.rotateCard,
            id: "front"
        }, "Front")
        return card;
    }
    createBack() {
        var card = React.createElement('div', {
            style: this.state.back,
            id: "back"
            // onClick: this.rotateCard,
        }, "Back")
        return card;
    }
    createCardContainer() {
        var card = React.createElement('div', {
            style: this.state.card,
            onClick: this.rotateCard,
            onMouseEnter: this.rotateCard,
        }, this.createFront(), this.createBack())
        return card;

    }
    render() {
        return (
            <div>
                {this.createCardContainer()}            
            </div>

        );
    }
}

export default FlipCard;