import Board from './board';
import Deck from './deck';
import Card from './card';


export default class Player {
    
    constructor(name,id) {
        this.playerName = name;
        this.playerCards = [];
        this.wonRounds = 0;
        this.id = id;
    }

    takeCard(cards){
        this.playerCards.push(cards.pop());
    }

    wonRound(){
        this.wonRounds++;
    }

    renderGamer(){
        const markup = `  
            <div class="gamer" id="player${this.id}">
                <div class="hearts"></div>
                <div class="handcards">
                    <div class="firstCard"></div>
                    <div class="secondCard"></div>
                </div>
            </div>`;

        document.querySelector('.player').insertAdjacentHTML('beforeEnd', markup);
    }

    renderRivals(){
        const markup = `  
            <div class="rival" id = "player${this.id}">
                <div class="hearts"></div>
                <div class="handcards">
                    <div class="firstCard"></div>
                    <div class="secondCard"></div>
                </div>
            </div>`;

        document.querySelector('.rivals').insertAdjacentHTML('afterBegin', markup);
    }
}