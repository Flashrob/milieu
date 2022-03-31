const createPokerDeckByValues = () => {
  const cardsInPokerDeck = 52;
  return [...Array(cardsInPokerDeck + 1).keys()].slice(1);
};

const shuffleDeck = (deck) => {
  const deckCopy = [...deck];

  for (let i = deckCopy.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    let temp = deckCopy[i];
    deckCopy[i] = deckCopy[randomIndex];
    deckCopy[randomIndex] = temp;
  }

  return deckCopy;
};

const preparePlayingDeck = () => {
  const deck = createPokerDeckByValues();
  const shuffledDeck = shuffleDeck(deck);
  return shuffledDeck;
};

module.exports = {
  preparePlayingDeck,
};
