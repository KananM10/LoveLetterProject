import Board from './models/board';
import Player from './models/player';
import Deck from './models/deck';
import Card from './models/card';


let gameBoard = new Board();
gameBoard.start('Kanan', 'Shisha');
gameBoard.deck.renderDeck();
gameBoard.players[0].renderGamer();
gameBoard.players[1].renderRivals();

gameBoard.deck.deckCounter();

gameBoard.players.forEach(player => gameBoard.deck.drawDeck(player));
// gameBoard.players.forEach(player => gameBoard.deck.drawDeck(player));   


let heartCount = 7;

gameBoard.renderHearts(heartCount);

// gameBoard.changeHeart(gameBoard.players[0] , 1);

