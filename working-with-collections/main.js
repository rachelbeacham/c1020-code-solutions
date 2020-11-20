/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');
var deck = [];
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

for (var i = 1; i <= 13; i++) {
  var hearts = {};
  hearts.rank = i;
  hearts.suit = 'hearts';
  hearts.value = i;
  var spades = {};
  spades.rank = i;
  spades.suit = 'spades';
  spades.value = i;
  var diamonds = {};
  diamonds.rank = i;
  diamonds.suit = 'diamonds';
  diamonds.value = i;
  var clubs = {};
  clubs.rank = i;
  clubs.suit = 'clubs';
  clubs.value = i;
  deck.push(hearts);
  deck.push(spades);
  deck.push(diamonds);
  deck.push(clubs);
  updateDeck();
}
function updateDeck() {
  for (var d = 0; d < deck.length; d++) {
    if (deck[d].rank === 1) {
      deck[d].rank = 'Ace';
      deck[d].value = 11;
    } else if (deck[d].rank === 11) {
      deck[d].rank = 'Jack';
      deck[d].value = 10;
    } else if (deck[d].rank === 12) {
      deck[d].rank = 'Queen';
      deck[d].value = 10;
    } else if (deck[d].rank === 13) {
      deck[d].rank = 'King';
      deck[d].value = 10;
    }
  }
}

function deal() {
  deck = _.shuffle(deck);
  for (var i = 0; i < deck.length; i++) {
    players[0].hand.push(deck[i]);
    players[0].hand.push(deck[i + 1]);
    i += 2;
    players[1].hand.push(deck[i]);
    players[1].hand.push(deck[i + 1]);
    i += 2;
    players[2].hand.push(deck[i]);
    players[2].hand.push(deck[i + 1]);
    i += 2;
    players[3].hand.push(deck[i]);
    players[3].hand.push(deck[i + 1]);
    i += 2;
    break;
  }
}

function addTotal(player) {
  for (var i = 0; i < player.hand.length; i++) {
    player.score += player.hand[i].value;
  }
  console.log(player.name + ' Score: ' + player.score);
  scores.push(player.score);
  winningScore = (Math.max(...scores));

}

function play() {
  deal();
  for (var i = 0; i < players.length; i++) {
    addTotal(players[i]);
    if (players[i].score === winningScore) {
      congrats = players[i].name + ' is the Winner!';
    }
  }
  console.log(congrats);
}
