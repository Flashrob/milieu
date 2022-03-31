const { preparePlayingDeck } = require('./utils/deck');
const { drawCards } = require('./utils/cards');
const { awardPoints } = require('./utils/points');

const playGame = (playerAmount) => {
  const scoreTally = {};
  const cardDeck = preparePlayingDeck();
  const rounds = cardDeck.length / playerAmount;

  for (let i = 0; i < rounds; i++) {
    // draw cards of round for each player
    const drawnCards = drawCards(cardDeck, playerAmount);
    // award points to player with highest card value
    awardPoints(scoreTally, drawnCards);
  }

  return scoreTally;
};

console.log(playGame(4));
