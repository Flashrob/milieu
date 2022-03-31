const { getHighestCard } = require('./cards');

const awardPoints = (scoreTally, drawnCards) => {
  const highestCard = getHighestCard(drawnCards);
  scoreTally[highestCard.player] = (scoreTally[highestCard.player] || 0) + 1;
};

module.exports = {
  awardPoints,
};
