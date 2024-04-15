// scoreLogic.js
import { useEffect, useState } from 'react';
import { computeScores } from '../computation/computation';
import playersData from '../computation/datascore';

const useScoreLogic = () => {
  const [playersWithScores, setPlayersWithScores] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const updatedPlayersData = computeScores(playersData);
    setPlayersWithScores(updatedPlayersData);
  }, []);

  useEffect(() => {
    if (playersWithScores.length > 0) {
      const randomIndex = Math.floor(Math.random() * playersWithScores.length);
      const randomPlayer = playersWithScores[randomIndex];
      const totalScore = playersWithScores.reduce((sum, player) => sum + player.score, 0);
      randomPlayer.score = totalScore;
      setWinner(randomPlayer);
    }
  }, [playersWithScores]);

  const handleBoxPress = (player) => {
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
  };

  return {
    playersWithScores,
    selectedPlayer,
    modalVisible,
    winner,
    handleBoxPress,
    handleCloseModal,
  };
};

export default useScoreLogic;
