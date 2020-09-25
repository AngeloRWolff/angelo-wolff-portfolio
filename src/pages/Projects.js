import React, { Component } from 'react';
import '../css/App.css'

import ProjectState from '../components/state/ProjectState.js';
import ProjectData from '..//components/data/project.data';
import projectData from '..//components/data/project.data';
import ContentCycle from '../components/class/ContentCycle'
class Projects extends Component {
  constructor(props, context) {
    console.log(ProjectData);
    console.log(ProjectState);
    super(props, context);
    this._leftNavEnter = this._leftNavEnter.bind(this);
    this._leftNavLeave = this._leftNavLeave.bind(this);
    this._rightNavLeave = this._rightNavLeave.bind(this);
    this._rightNavEnter = this._rightNavEnter.bind(this);
    this._leftNavClick = this._leftNavClick.bind(this);
    this._rightNavClick = this._rightNavClick.bind(this);

    this.state = {
      leftNav: ProjectState.leftNav,
      rightNav: ProjectState.rightNav,
      header: ProjectState.headerNav,
      currentData: ProjectData.discordChessBot,
    }
  }

  buildLeftNavigation() {
    const leftNavigate = React.createElement('div', {
      onMouseEnter: this._leftNavEnter,
      onMouseLeave: this._leftNavLeave,
      onClick: this._leftNavClick,
      style: this.state.leftNav
    })
    return (leftNavigate)
  }

  buildProjectHeader() {
    const header = React.createElement('div', {
      style: this.state.header
    },)
    return (header)
  }

  buildRightNavigation() {
    const rightNavigate = React.createElement('div', {
      onMouseEnter: this._rightNavEnter,
      onMouseLeave: this._rightNavLeave,
      onClick: this._rightNavClick,

      style: this.state.rightNav
    })
    return (rightNavigate)
  }

  _rightNavClick()
  {
    console.log("Assigning thing")
    projectIndex++;
    if (projectIndex == 3)
    projectIndex = 0;
    switch(projectIndex)
    {
    
    }
    console.log(this.state.currentData)
  }
  _leftNavClick()
  {
    projectIndex--;
    if (projectIndex == -1)
    projectIndex = 2;
    switch(projectIndex)
    {
    
    }
    
  }

  _leftNavEnter() {
    this.setState({
      leftNav: {
        ...this.state.leftNav,
        backgroundColor: '#616161'
      }
    })
  }

  _leftNavLeave() {
    this.setState({
      leftNav: {
        ...this.state.leftNav,
        backgroundColor: ProjectState.leftNav.backgroundColor
      }
    })
  }

  _rightNavEnter() {
    this.setState({
      rightNav: {
        ...this.state.rightNav,
        backgroundColor: '#616161'
      }
    })
  }
  _rightNavLeave() {
    this.setState({
      rightNav: {
        ...this.state.rightNav,
        backgroundColor: ProjectState.rightNav.backgroundColor
      }
    })
  }

  componentDidMount(){
    this.setState({
      currentData: {
        ...this.state.currentData,
        title: ProjectData.discordChessBot.title,
        description: ProjectData.discordChessBot.description,
        languages: ProjectData.discordChessBot.languages 
      }
    })
  }
  
  render() {
    return (
      <div>
        {this.buildLeftNavigation()}{this.buildProjectHeader()}{this.buildRightNavigation()}

        <div>
        <ContentCycle  content={ProjectData.discordChessBot.content}></ContentCycle>
        <ContentCycle  content={ProjectData.tinyBlock.content}></ContentCycle>
        <ContentCycle  content={ProjectData.chessEngine.content}></ContentCycle>
         {this.state.currentData.title}
        
        </div>
        <iframe src="https://discordapp.com/widget?id=757545595199160321&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
  </div>
    );
  }
}
var projectIndex = 0;
function getNextProjectObject(objectCollection)
{

}
export default Projects;