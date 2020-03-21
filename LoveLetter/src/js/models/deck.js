import Board from './board';
import Player from './player';
import Card from './card';


export default class Deck {
    
    constructor() {
        this.cards = []; 
    }      

    createDeck() {
        let id=1;
        let names = ['Guard', 'Guard', 'Guard', 'Guard', 'Guard', 'Priest', 'Priest', 'Baron', 'Baron', 'Handmaid', 'Handmaid', 'Prince', 'Prince', 'King', 'Countess', 'Princess'];
        let values = [1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8];
        for (let i = 0; i < names.length; i++) 
            this.cards.push(new Card(names[i],values[i], id++));
    }

    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }

    drawDeck(player){
        let cardPlace;
        let id = 'player' + player.id;
        let idDiv = document.getElementById(id);
        player.takeCard(this.cards);
        let isEmpty = idDiv.querySelector('.firstCard').innerHTML === "";

        let curCardId;
        let activeCard;

        if(player.playerCards.length === 1){
            activeCard = player.playerCards[0];
        }else if(player.playerCards.length === 2){
            activeCard = player.playerCards[1];
        }
        
        let imgId = 'c' + activeCard.id;
        let card = document.getElementById(imgId);
        document.querySelector(".deckCards").removeChild(card);
        const markup = `<img class="card" id="c${activeCard.id}" src="../img/cards/card-${activeCard.value}.png">`;
        if (isEmpty) {
            idDiv.querySelector(".firstCard").insertAdjacentHTML('afterBegin', markup);
        }else{
            idDiv.querySelector(".secondCard").insertAdjacentHTML('afterBegin', markup);
        }

        this.deckCounter();

    }

    renderDeck(){
        const markup = `${ this.cards.map(el => el.renderCardBack(el)).join('') }`;

        document.querySelector('.deckCards').insertAdjacentHTML('afterBegin', markup);
    }

    deckCounter(){
        document.querySelector('.deckCounter').innerHTML = '';
        const markup = `<Strong>Deck: (x${this.cards.length})</strong>`;
        document.querySelector('.deckCounter').insertAdjacentHTML('afterBegin', markup);
    }

}