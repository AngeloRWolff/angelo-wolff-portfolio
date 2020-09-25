import React, { Component } from 'react';
import './GraphItem.css'

var progressObject = 
{
    //border: "2px solid #4061cf",
    float: 'left',
    textAlign: 'right',
   
    backgroundColor: "#355052",
    marginTop: 5,
    height: 30,
    width: "0%",
    borderRadius: "10px",
    transitionDuration: "1s"
}
var titleStyle =
{
    position: 'absolute',
    display: "inline-block",
    float: 'left',
   
    fontSize: "19px",
    textIndent: "5px",
    color: 'white',   
}
var iconStyle = 
{
   zIndex: 100,
    float: 'left',
    opacity: 0,
    position: 'absolute',
   position: 'relative',
   // display: 'inline-block',
    width: "auto",
    height: "100%",
    marginLeft: "10px",
   
    transitionDuration: "1s"

}
var iconContainer={

}
class GraphItem extends Component {
    constructor(props, context) {
        super(props, context);      
        this.state =
        {
            progress: progressObject,
            iconS: iconStyle,
        }
        console.log(props)
    }
    
    createProgressBar()
    {
      var progressBar = React.createElement('div', {
         id : this.state.id,
         style: this.state.progress,       
      }, this.createTitle(), this.createLabel())
      return progressBar;
    }
    createIcon()
    {
        var icon = React.createElement('img', {
            src: this.props.icon,
            style: this.state.iconS
             })
        return icon;
    }
    createTitle()
    {
        var title = React.createElement('div',{
        style: titleStyle
        }, this.props.title)
        return title
    }
    createLabel()
    {
        var label = React.createElement('div', {
            className: 'labelG'
        }, this.props.value)

        return label;
    }
    componentDidMount()
    {
        var delay = this.props.delay;
        var value =  this.props.value;
        setTimeout(function (){      
            this.setState({
                progress: {
                  ...this.state.progress,
                  width: (value) + '%'
                }  
            })
            this.setState({
                iconS: {
                  ...this.state.iconS,
                  opacity: 1
                }  
            })
            
        }.bind(this),delay)
    }

    render() {
        return (
            <div className = 'progressContainer'>
                 
            <div className = 'iconContainer'>
           
              {this.createIcon()}  
              </div>
              <div className = 'barContainer'>
              {this.createProgressBar()}
            
              
              </div>
            </div>
        );
    }
}

function generateID()
{
    return Math.random();
}

export default GraphItem;