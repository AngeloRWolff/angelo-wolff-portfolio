import React, { Component } from 'react';
var container = {
    width: 120,
    height: 120,
    display: 'inline-block',
    marginRight: '8px',
    borderRadius: '15px',
    cursor: 'default'
}
var pinStyle = {
    borderRadius: '15px',
    objectFit: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: 'grey',
    display: 'inline-block'
}
var title = {
    borderRadius: '15px',
    color: 'rgb(210,210,210)',
    backgroundColor: 'rgba(10,10,10,0.6)',
    width:120,
    height: 50,
    lineHeight: '300%',
    transform: 'translateY(-85px)'
}
class Pin extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            style : pinStyle,
        }
    }
    openPage(link) {
        console.log('opening link');
        window.open(link, '_blank')
    }
    createPin()
    {
        return React.createElement('img',{
            style: this.state.style,
            src: this.props.src,
        })
    }
    render() {
        return (
            <div onClick = {()=>this.openPage(this.props.link)} style = {container}>
                {this.createPin()}
                <div style = {title}>{this.props.title}</div>
            </div>
        );
    }
}

export default Pin;