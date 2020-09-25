import React, { Component } from 'react';
import './FlipCard.css'



var cardContainer = {
    display: 'inline-block',
    width: 160,
    height: 200,
    borderRadius: "20px",
    marginLeft: "10px",
    marginTop: "5px",
    transitionDuration: "0.6s",
    transform: 'rotateY(180deg)',
    zIndex: 100,
    cursor: "pointer",
}

var frontCard = {
    transform: 'rotateY(180deg)',
    position: 'absolute',
    display: 'inline-block',
    zIndex: 0,
    width: 160,
    height: 180,
    backgroundColor: "#303030",
    borderRadius: "25px",
    transitionDuration: "0.6s",
    opacity: 1,
}

var backCard = {
    color: 'white',
    opacity: 0,
    zIndex: -1,
    position: 'relative',
    display: 'inline-block',
    width: 160,
    height: 200,
    backgroundColor: "#355052",
    borderRadius: "25px",
    transitionDuration: "0.6s",

}
var frontTitleStyle = {
    display: 'inline-block',
    width: "100%",
    height: "25%",
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "#3b3b3b",
    fontSize: "20px",

    color: "#f2f2f2",
    textAlign: 'center',
    verticalAlign: "middle",
    lineHeight: "250%",
}
var backColor =
{
    borderRadius: "20px 20px 0px 0px",
    backgroundColor: "#303030",
    width: "100%",
    height: "100px",
    position: 'absolute',
    zIndex: -1,

}
var frontImageStyle = {
    margin: "auto",

    width: "80px",
    height: "80px"
}
class FlipCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.rotateCard = this.rotateCard.bind(this);
        this.state = {
            card: cardContainer,
            front: frontCard,
            back: backCard,
            flipped: true,
        }
    }

    rotateCard() {
        if (!this.state.flipped) {

            this.setState({
                back: {
                    ...this.state.back, zIndex: -1, opacity: 0,
                },
                front: {
                    ...this.state.front, zIndex: 0, opacity: 1,
                },
                card: {
                    ...this.state.card, transform: 'rotateY(180deg)'
                },
                flipped: true
            })
        } else {

            this.setState({
                card: {
                    ...this.state.card, transform: 'rotateY(0deg)'

                },
                back: {
                    ...this.state.back, zIndex: 0, opacity: 1,
                },
                front: {
                    ...this.state.front, zIndex: -1, opacity: 0,
                },
                flipped: false
            })
        }
    }

    createFront() {
        var card = React.createElement('div', {
            style: this.state.front,
            id: "front"
        }, this.frontTitle(), this.createPadding(6), this.frontImage(),this.createPadding(6), this.tinyLabel())
        return card;
    }
    frontTitle() {
        var frontTitle = React.createElement('div',
            {
                style: frontTitleStyle
            }, this.props.title)
        return frontTitle
    }
    tinyLabel() {
        return React.createElement('div', {
            style: { color: 'rgb(200,200,200)' }
        },"click to view")
    }
    createPadding(padValue) {
        return React.createElement('div', {
            style: { height: `${padValue}%`, width: '100%' }
        })
    }
    frontImage() {
        var frontImage = React.createElement('img', {
                src: this.props.image,
                style: frontImageStyle,
            })

        return frontImage
    }

    createBack() {
        var card = React.createElement('div', {
            style: this.state.back,
            id: "back"

        }, this.listElement())
        return card;
    }

    listElement() {
        var backC = React.createElement('div', {
            style: backColor,
        })
        var listItems = [
            backC,
            this.createPadding(5),
            this.frontImage(),
            this.createPadding(5)
        ]

        this.props.itemlist.forEach(element => {
            if (element!= '' || element != null)
            {
            var list = React.createElement('div', {
                style: {
                    display: 'inline-block',
                    position: 'relative',
                 
                }
            }, element)
            listItems.push(list);
        }
        });

        return listItems;
    }




    createCardContainer() {
        var card = React.createElement('div', {
            style: this.state.card,
            onMouseDown: this.rotateCard,
            // onMouseEnter: this.rotateCard,
            //onMouseEnter: this.rotateCard,
        }, this.createFront(), this.createBack())
        return card;

    }
    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                {this.createCardContainer()}
            </div>

        );
    }
}

export default FlipCard;