const drawCards = (deck, playerAmount) => {
  let drawnCards = [];
  for (let j = 0; j < playerAmount; j++) {
    const drawnCard = deck.pop();
    const cardByPlayer = { player: j, value: drawnCard };
    drawnCards.push(cardByPlayer);
  }
  return drawnCards;
};

const getHighestCard = (drawnCards) => {
  let highestCard = drawnCards.shift();

  for (const currentCard of drawnCards) {
    if (highestCard.value < currentCard.value) highestCard = currentCard;
  }

  return highestCard;
};

module.exports = {
  drawCards,
  getHighestCard
};
