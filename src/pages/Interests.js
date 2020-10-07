import React, { Component } from 'react';
import '..//css/Interests.css'


import blitzIcon from '..//assets/svg/blitz.svg'
import bulletIcon from '..//assets/svg/bullet.svg'
import rapidIcon from '..//assets/svg/rabbit.svg'
import chessIcon from '..//assets/svg/chess.svg'

import Pin from '../components/Pin';

class Interests extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            blitzRating: 'notset',
            bulletRating: 'notset',
            rapidRating: 'notset',
        }

        this.getChessStats();
    }

    getChessStats() {
        fetch(`https://api.chess.com/pub/player/doggoddog/stats`)
            .then(response => response.json())
            .then((output) => {
                this.setState({
                    blitzRating: output.chess_blitz.last.rating,
                    bulletRating: output.chess_bullet.last.rating,
                    rapidRating: output.chess_rapid.last.rating
                })
            })
    }

    openChessProfile() {
        window.open('https://www.chess.com/member/doggoddog', '_blank')
    }
    
    render() {
        return (
            <div style={{ textAlign: 'center', height: window.innerHeight, minHeight: '600px', }}>
                 <section style = {{height:'20px'}}></section>
                <div className='inText'>Here are my current Chess.com ratings</div>
                <div className='chess-container'>
                    <div className='stat'>
                        <div className='label'>Blitz</div>
                        <img className='img' src={blitzIcon} alt = 'blitz-icon'></img>
                        <div className='label-stat'>{this.state.blitzRating}</div>
                    </div>
                    <div className='stat'>
                        <div className='label'>Bullet</div>
                        <img className='img' src={bulletIcon} alt = 'bullet-icon'></img>
                        <div className='label-stat'>{this.state.bulletRating}</div>
                    </div>
                    <div className='stat'>
                        <div className='label'>Rapid</div>
                        <img className='img' src={rapidIcon} alt = 'rapid-icon'></img>
                        <div className='label-stat'>{this.state.rapidRating}</div>
                    </div>
                </div>

               

                <button  onClick={this.openChessProfile} className = 'chess'>
                        <img src = {chessIcon} className = 'chess-img' alt = 'chess'></img>View profile
                    </button>

                <section style = {{height:'80px'}}></section>
                <div className='inText'>Here are some places you can find me</div>
                <section style = {{height:'10px'}}></section>
                
                <div>
                    <Pin src = 'https://blog.hootsuite.com/wp-content/uploads/2020/01/more-view-on-youtube-1280x720.jpg'   link = 'https://www.youtube.com/channel/UCqMMcR-eL7gtDheQPxH3P9g'     title = 'YouTube'></Pin>
                    <Pin src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEU5VpyZmMZ4AAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC' link = 'https://www.facebook.com/TheKillerTortoise/' title = 'FaceBook'></Pin>
                    <Pin src = 'https://raw.githubusercontent.com/diegoeis/tableless-static-images/master/2015/06/code-wars.jpg' link = 'https://www.codewars.com/users/AngeloWolff' title = 'CodeWars'></Pin>
                    <Pin src = 'https://content.fortune.com/wp-content/uploads/2019/03/brb_04_01_19-spotify.jpg'        link = 'https://open.spotify.com/user/y93mgjt3h3f15tndsxjdmsw8p?si=lo2P4b7hR-uGWr36lE_tiA'    title = 'Spotify'></Pin>
                </div>

            </div>
        );
    }
}

export default Interests;