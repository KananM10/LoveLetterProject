import Player from './player';
import Deck from './deck';
import Card from './card';

export default class Board {
    
    constructor() {
        this.players = []; // players of the game
        this.cardsOnTheSide = []; //to keep 4 cards on the side
        this.deck = []; //deck
        this.id = 0;
    }

    start(...playerName) {
        
        playerName.forEach(playerName => {
            this.players.push(new Player(playerName, this.id++));
        });
        this.deck = new Deck();
        this.deck.createDeck();
        this.deck.shuffleDeck();
    }   

    renderHearts(heartsCounter){
        this.players.forEach(player => {
            let id = heartsCounter;
            for(let i = 0; i < heartsCounter; i++){
                
                const markup = 
                `
                <img id="${player.id}${id--}" class="heart whiteH" src="../img/heart-white.png">
                `;

                let Playerid = 'player' + player.id;
                let place = document.getElementById(Playerid);
                place.querySelector(".hearts").insertAdjacentHTML('afterBegin', markup);
            }
        });
    }

    changeHeart(player,round){
        let Playerid = 'player' + player.id;
        let heartId = '' + player.id + round;
        let place = document.getElementById(Playerid);
        const roundId = document.getElementById(heartId);
        if(roundId) place.querySelector(".hearts").removeChild(roundId);
        
        const markup = `<img id="${heartId}" class="heart redH" src="../img/heart-red.png">`;

        place.querySelector(".hearts").insertAdjacentHTML('afterBegin', markup);
    }

}