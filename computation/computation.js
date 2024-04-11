// This file contains the score computation function

// Function to generate a random score for a player
const generateRandomScore = () => {
  return Math.floor(Math.random() * 501); // Generates a random score between 0 and 500
};

// Function to compute the score for each player
const computeScores = playersData => {
  playersData.forEach(player => {
    let totalScore = 0;
    for (let i = 0; i < 10; i++) {
      // Assuming 10 rounds
      totalScore += generateRandomScore();
    }
    player.score = totalScore;
  });

  return playersData;
};

export {computeScores};
