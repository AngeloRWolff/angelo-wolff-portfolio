import React, { Component } from 'react';
import '..//App.css'






import name from '..//assets/audio/name.mp3'

import voiceIcon from '..//assets/images/voice.png'

import downloadIcon from '..//assets/svg/download.svg'

import cv from '../assets/pdf/angelo-wolff-resume.pdf'





var gitHubElementContainer = {
    width: '100%',
    height: '40px',
    marginTop: '5px',
    borderRadius: '5px',
    backgroundColor: '#333333',
}


class Idle extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            hitHubElements: 'Test',
            thisProjTitle: '',
            thisDefaultBranch: '',
        };
        this.fetchGithub = this.fetchGithub.bind(this);
    
  
        this.gitHubLinkClick = this.gitHubLinkClick.bind(this);
        this.fetchGithub();

    }
   
    openPage(link) {
        window.open(link, '_blank')
    }

    gitHubTitle(title) {
        return React.createElement('div', {
            style: {

                display: 'inline-block',
                color: 'rgb(220,220,220)',
                width: '75%',
                height: '20px',
                textAlign: 'right',
                transform: 'translateX(-5px)'
            }
        }, title)
    }
    gitHubLinkClick(link) {
        this.openPage(link);
    }

    gitHubLink(link) {
        return React.createElement('button', {
            style: {
                width: '25%',
                height: '100%',
                border: 0,
                borderRadius: '5px',
                textAlign: 'center',
                color: 'rgb(220,220,220)',
                backgroundColor: '#2e5f75',
            },
            onClick: ()=> this.gitHubLinkClick(link)
        }, 'View')
    }
    fetchGithub() {
        fetch('https://api.github.com/users/AngeloRWolff/repos')
            .then(response => response.json())
            .then(data => {
                var gitHubElements = [];
                var index = 10001;
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];
                        if (element.id === 298496580)
                        {
                            this.setState({thisProjTitle: element.name,
                                           thisDefaultBranch: element.default_branch})
                        }
                        gitHubElements.push(
                            React.createElement('div', {
                                style: gitHubElementContainer,
                                key: index,
                            }, this.gitHubTitle(element.name), this.gitHubLink(element.clone_url))
                        )
                        index++;
                    }
                }
                this.setState({ hitHubElements: gitHubElements })
            })
            .catch(error => console.error(error))


    }
    playName(){
        document.getElementById('playName').play();
    }

  
    render() {
        return (
            <div style={{ textAlign: 'center', height: window.innerHeight, minHeight: '600px', }}>
                <div id="coords"></div>
                <audio id="playName" src={name}></audio>
                <div className='orbit'>
                    <div style={{ transform: 'translateX(-15px)', display: 'inline-block' }}>Hello, my name is</div>
                    <div style={{ transform: 'translateX(-10px)', display: 'inline-block', color: '#1593b3' }}> Angelo Wolff</div>
                    <img style={{ transform: 'translateX(-10px)', marginLeft: '5px', position: 'absolute', width: '30px', height: '30px' }} src={voiceIcon} onClick={this.playName} alt = 'v-icon'></img>
                </div>
                <div  className = "inText">Download my document cv below</div>
                <a href={cv} download>
                <button className = 'download'>
                        <img src = {downloadIcon} className = 'download-img' alt = 'download-cv'></img>Download CV.PDF
                    </button>
                    </a>
                    <section style = {{height:'80px'}}></section>

                <div className = "inText">View my other github projects</div>
                <section style = {{height:'5px'}}></section>
                <div className='container'>
                    {this.state.hitHubElements}
                </div>

                <div>
                <button onClick={()=>this.openPage(`https://github.com/AngeloRWolff/${this.state.thisProjTitle}/archive/${this.state.thisDefaultBranch}.zip`)} className = 'download'>
                        <img src = {downloadIcon} className = 'download-img' alt = 'download-proj'></img>Download This Project
                    </button>

                    
                    </div>
            </div>


        );

    }

}

export default Idle;