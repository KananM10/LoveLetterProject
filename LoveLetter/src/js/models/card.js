import Board from './board';
import Player from './player';
import Deck from './deck';

export default class Card {

    constructor(name, value,id) {
        this.name = name;
        this.value = value;
        this.id = id;

    }

    renderCardBack(){
        return `<img class="cardsBack card${this.value}" id="c${this.id}" src="../img/cards/card-back.jpg">`;
    }
}