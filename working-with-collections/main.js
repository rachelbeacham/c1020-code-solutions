/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');
var deck = [];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
var suits = ['spades', 'diamonds', 'clubs', 'hearts'];
var scores = [];
var winningScore;
var congrats = '';
var players = [
  {
    name: 'Rachel',
    hand: [],
    score: 0
  },
  {
    name: 'Stephen',
    hand: [],
    score: 0
  },
  {
    name: 'Ruby',
    hand: [],
    score: 0
  },
  {
    name: 'Kris',
    hand: [],
    score: 0
  }
];

for (var i = 0; i < suits.length; i++) {
  for (var r = 0; r < ranks.length; r++) {
    var card = {};
    card.suit = suits[i];
    card.rank = ranks[r];
    deck.push(card);
  }
}

function deal() {
  deck = _.shuffle(deck);
  for (var i = 0; i < players.length; i++) {
    players[i].hand.push(deck[i]);
    players[i].hand.push(deck[i + 4]);
  }
}

function getScore(hand) {
  var pointValue = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].rank === 'ace') {
      pointValue += 11;
    } else if (hand[i].rank === 'jack' || hand[i].rank === 'queen' || hand[i].rank === 'king') {
      pointValue += 10;
    } else {
      pointValue += hand[i].rank;
    }
  }
  return pointValue;
}

function determineWinner() {
  winningScore = (Math.max(...scores));
  for (var i = 0; i < players.length; i++) {
    if (players[i].score === winningScore) {
      congrats = players[i].name + ' is the Winner!';
    }
  }
  console.log(congrats);
}

function play() {
  deal();
  for (var i = 0; i < players.length; i++) {
    players[i].score = getScore(players[i].hand);
    console.log(players[i].name + ' Score: ' + players[i].score);
    scores.push(players[i].score);
  }
  determineWinner();
}
