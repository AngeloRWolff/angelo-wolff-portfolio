import React, { Component } from 'react';

var styleCanvas = {
    width: 300,
    height: 300,
    backgroundColor: 'red',


}

var loadingS = {
    width: 300,
    height: 300,
    transitionDuration: '0.8s',
    backgroundColor: 'grey',
    display: 'inline-block',
    src: '',
    position: 'absolute',
    borderRadius: "20px",
    frameBorder: 0,
    zIndex: 200,
    transform: "translate(-50%,0)",
}
var block1 = {
    width: 300,
    height: 300,
    transitionDuration: '0.8s',
    backgroundColor: 'grey',
    display: 'inline-block',
    src: '',
    position: 'absolute',
    borderRadius: "20px",
    frameBorder: 0,
    zIndex: 100,
    transform: "translate(-50%,0)",
}
var block2 = {
    opacity: 0,
    zIndex: -100,
    width: 300,
    height: 300,
    position: 'absolute',
    transitionDuration: '0.4s',
    display: 'inline-block',
    src: '',
    transform: "translateX(1%)"
}
var navButton = {
    marginTop: 300,
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: "50%",
    transitionDuration: '0.5s',
    display: 'inline-block',
   
}
var block3 = {
    zIndex: -100,
    width: 300,
    height: 300,
    transitionDuration: '0.2s',
    opacity: 0,
    transform: "translateX(-90%)"
}
var block4 = {
    width: 200,
    height: 20,
    backgroundColor: 'white',
    display: 'inline-block'
}

var disabled = {
    opacity: 0.2,
    backgroundColor: 'red',
    zIndex: -100
}
var i = 0;
class ContentCycle extends Component {

    constructor(props, context) {
        super(props, context);
        this._nextContent = this._nextContent.bind(this);      
        this._renderNavButtons = this._renderNavButtons.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.__play = this.__play.bind(this);
        this.__onLoad = this.__onLoad.bind(this);
        var prelockStates = [];
        var prelinkStates = [];
        for (const key in this.props.content) {
            if (this.props.content.hasOwnProperty(key)) {
                const element = this.props.content[key];              
                prelockStates.push(block2);
                prelinkStates.push(element.link);
            }
        }
        this.state = {
            blockState: prelockStates,
            linkState: prelinkStates,
        }
        console.log(this.state.blockState)
        isLoaded = false;
        globalIndex = -1;
    }

    __play()
    {
        console.log("Video is playing");
    }

    __onLoad(){
        if (isLoaded == false)
        {
        this._nextContent(0)
        console.log("Done Loading")
        isLoaded = true;
        }     
    }
    buildBox() {
        var boxes = [];
        var index = 0;
        for (const key in this.props.content) {
            if (this.props.content.hasOwnProperty(key)) {
                const element = this.props.content[key];
                boxes.push(React.createElement(_type(element.type), {
                    frameBorder: 0,
                    src: this.state.linkState[index],
                    borderRadius: "20%",
                    style: this.state.blockState[index],
                    id: `iframeID${index}`,
                    onLoad : this.__onLoad
                }))

            }
            index++;
        }
        return boxes;
    }

    buildDescription()
    {
        return React.createElement
    }

    loading()
    {
        return React.createElement('div', {
            className: "loader",
            id : 'load'
        },)
    }

    _nextContent(i) {
        if (i == globalIndex) return
        this.setState({ ...this.state.blockState[i] = block1 })
        this.setState({ ...this.state.blockState[globalIndex] = block2 })
        this.pause(globalIndex)
        globalIndex = i;
    }

    componentDidUpdate()
    {
        console.log("done");
     
    }
    componentDidMount() {
        
    }



    _renderNavButtons() {
        var navButtons = [];
        for (const key in this.props.content) {
            if (this.props.content.hasOwnProperty(key)) {  
                const element = this.props.content[key];
                navButtons.push(React.createElement('div', {
                    style: navButton,
                    key: element.id,
                    onMouseEnter: ()=>this._nextContent(element.id),
                }))
            }
        }
        return navButtons;
    }
    
     pause(id)
    {
        
      
        var iframeID = `iframeID${id}`;
        var html5VideoPlayer = document.getElementById(iframeID);
        if (html5VideoPlayer == null) return;
        html5VideoPlayer.src = html5VideoPlayer.src;
        
    }

    render() {
        return (
            <div>
                <div>{}</div>
                <div>{this.buildBox()}</div>
                <div>{this._renderNavButtons()}</div>
            </div>
        );
    }
}
var isLoaded = false;
var globalIndex = -1;
function inc() {
    i++;
}
var currentIndex = 0;
function getNextContent(object) {
    var size = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            size++;
        }
    }
    console.log("size is " + size);
    var keyIndex = currentIndex + 2;
    if (keyIndex + 1 > size) {
        keyIndex = 0
    } else
        keyIndex++;

    console.log("keyIndex is " + size);
    var finalIndex = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            if (finalIndex + 1 == keyIndex) {
                console.log("Link: " + element.link);
                return element.link;
            }
            finalIndex++
        }
    }
    currentIndex++
}

function _type(type) {
    switch (type) {
        case "VIDEO": return 'iframe';
        case "IMG": return 'img';
    }
}
var currentState;
export default ContentCycle;