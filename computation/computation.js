// computation.js
// This file contains the score computation function

// Function to generate a random score for a player
const generateRandomScore = () => {
    return Math.floor(Math.random() * 51); // Generates a random score between 0 and 50
  };
  
  // Function to compute the score for each player
  const computeScores = (playersData) => {
    playersData.forEach(player => {
      let totalScore = 0;
      for (let i = 0; i < 10; i++) { // Assuming 10 rounds
        totalScore += generateRandomScore();
        if (totalScore > 500) {
          totalScore = 500; // Limiting the total score to 500
          break; // Exit loop if total score exceeds 500
        }
      }
      player.score = totalScore;
    });
    
    return playersData;
  };
  
  export { computeScores };
  