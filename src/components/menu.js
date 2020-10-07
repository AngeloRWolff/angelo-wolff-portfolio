import React, { Component } from 'react';

var menuStyle = {
    lineHeight: "250%",
    display: 'inline-block',
    width: '100%',
    height: '60px',
    top: '-20px',
    backgroundColor: '#262626',
    textAlign: 'center',
    color : '#d4d4d4',
    fontSize: '30px',


}
var underline = {
    width: "100%",
    height: '5px',
    backgroundColor: '#2e5f75'
}
class Menu extends Component {
    render() {
        return (
            <div>
            <div style = {menuStyle}>
                {this.props.title}
                
            </div>
            <div style = {underline}></div>
            </div>
        );
    }
}

export default Menu;