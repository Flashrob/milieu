// 1. create a deck of cards
// 2. shuffle the deck

const createDeck = () => {
  const deck = [];
  for (let i = 1; i <= 52; i++) {
    deck.push(i);
  }

  return deck;
};

const deck = createDeck();

const shuffleDeck = (deck) => {
  const deckCopy = [...deck];

  for (let i = deckCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deckCopy[i];
    deckCopy[i] = deckCopy[j];
    deckCopy[j] = temp;
  }

  return deckCopy;
};

const shuffledDeck = shuffleDeck(deck);

const startGame = (deck) => {
  const hashmap = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const playerAmount = 4;
  const rounds = deck.length / playerAmount;
  //   let currentPlayer = 0;

  //   for (let i = 0; i < deck.length; i++) {
  //     if (i === deck.length - 4) break;
  //     hashmap[currentPlayer] = hashmap[currentPlayer] + parseInt(deck[i].value);
  //     currentPlayer++;
  //     if (currentPlayer > 3) currentPlayer = 0;
  //   }

  let roundCards = [];

  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < playerAmount; j++) {
      const card = deck.pop();
      roundCards.push({ player: j, value: card });
    }
    let tempMax = roundCards[0];
    for (let k = 0; k < roundCards.length; k++) {
      if (tempMax.value < roundCards[k].value) tempMax = roundCards[k];
      if (k === roundCards.length - 1) {
          hashmap[tempMax.player] = hashmap[tempMax.player] + 1;
      }
    }
    roundCards = [];
  }

    console.log(hashmap);
};

startGame(shuffledDeck);
