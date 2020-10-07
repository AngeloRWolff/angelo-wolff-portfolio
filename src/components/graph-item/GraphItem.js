import React, { Component } from 'react';
import {progressBar, iconStyle, titleStyle, labelStyle} from './GraphItem.styling.js';
import {progressContainer, iconContainer, barContainer} from './GraphItem.containers.js'

class GraphItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state =
        {
            progressStyle: progressBar,
            iconStyle: iconStyle,
            isInView: false,
        }
        this.checkView()
    }

    checkView()
    {    
       var check =  setInterval(function () {
           var g =  document.getElementById('graph').getBoundingClientRect()
            if (g.y -500 < 0)
            {
                this.setState({isInView: true})
                clearInterval(check);
            }          
        }.bind(this), 100)
    }
    /*
    create the progress bar that contains two child elements
        1. the title of the language skillset
        2. the label representing the value of the skillset
    */
    createProgressBar() {
        var progress = React.createElement('div', {
            style: this.state.progressStyle,
        }, this.createTitle(), this.createLabel())
        return progress
    }

    id()
    {
        return Math.random();
    }
    //create the icon displayed for the language [source: props.icon]
    createIcon() {
        var icon = React.createElement('img', {
            src: this.props.icon,
            style: this.state.iconStyle
        })
        return icon
    }

    //create the title of the language being displayed [source: props.title]
    createTitle() {
        var title = React.createElement('div', {
            style: titleStyle
        }, this.props.title)
        return title
    }

    //create the label of the value of skillset [source: props.value]
    createLabel() {
        var label = React.createElement('div', {
            style: labelStyle
        }, this.props.value)
        return label
    }

    /*
    1. on component mount, we fetch the delay, and value for the graph
    2. set a timeout using the delay in milliseconds
    3. update the state of the progress bar with the value
    4. update the state of the icon to visiible [opacity: 100%]
    5. bind setTimeout to componenentDidMount
    */
    componentDidMount() {
        var delay = this.props.delay; 
        var value = this.props.value; 
        
       var checkView =  setInterval(function () {

            if (this.state.isInView === true)
            {
                setTimeout(function () {    
            this.setState({
                progressStyle: {
                    ...this.state.progressStyle,
                    width: (value) + '%'
                }
            })
            this.setState({
                iconStyle: {
                    ...this.state.iconStyle,
                    opacity: 1
                }
            })
            clearInterval(checkView);
        }.bind(this), delay)
            }
        }.bind(this), 100)
    }

    //render the icon and progressbar within their containers 
    render() {
        return (
            <div style = {progressContainer}>
                <div style={iconContainer}>{this.createIcon()}</div>                     
                <div style={barContainer}>{this.createProgressBar()}</div>                
            </div>
        );
    }
}

export default GraphItem;