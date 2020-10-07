import React, { Component } from 'react';
import {frontImageStyle, frontTitleStyle, backCard, backColor, frontCard, cardContainer} from './FlipCard.styling';

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
            key: this.id(),
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
            if (element !== '' || element != null)
            {
            var list = React.createElement('div', {
                key: this.id(),
            }, element)
            listItems.push(list);
        }
        });

        return listItems;
    }

    id(){return Math.random()}

    createCardContainer() {
        var card = React.createElement('div', {     
            style: this.state.card,
            onMouseDown: this.rotateCard,
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