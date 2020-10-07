import mbIntro from '../assets/images/magnus-botson/intropgn.png'
import mbTheme from '../assets/images/magnus-botson/theme.png'
import mbPgn from '../assets/images/magnus-botson/endpgn.png'
import mbMove from '../assets/images/magnus-botson/move.png'

import tbInitial from '../assets/images/tiny-block/initial.png'
import tbTransparency from '../assets/images/tiny-block/transparency.png'

export const data = [
    { 
        name: 'Discord Chessbot',
        description: 'A discord bot that features player vs player chess games and player vs computer chess games, cross server play, unstructured data storage, notation commands and tracking, game evaluation, ranking (ELO), high speed image rendering using canvas, high speed socket connection to c# server that runs binary engine(stockfish) with leela chess zero (kibitzer) that uses thread pools and locking',
        links: [{link: "https://www.youtube.com/embed/7eK0D8CX7qM",type:'iframe'},
                {link: mbIntro,type:'img'},
                {link: mbMove,type:'img'},
                {link: mbPgn,type:'img'},
                {link: mbTheme,type:'img'},               
            ]
    
            
    },
    {
        name: 'Tiny Blocks',
        description: 'Tiny block is a realtime image manipulator, that makes use of bit locking techniques and unsafe direct memory access to modify image data streams, designed for use in sprite manipulation for aniamated objects in game engines',
        links: [{link: "https://www.youtube.com/embed/LhoIjvitqYk",type:'iframe'},
                {link: tbInitial,type:'img'},
                {link: tbTransparency,type:'img'}]
               
    },
    {
        name: 'Chess Engine',
        description: 'A simple chess engine that only knows the rules of movement, there are no rules defined for compelex chess logic. The goal was to develop an adaptable cost based evaluation for chess positions at a single depth',
        links: [{link: "https://www.youtube.com/embed/WMCUib038MQ",type:'iframe'},
        ]
    },
   
]