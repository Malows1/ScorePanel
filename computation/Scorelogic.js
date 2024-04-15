// scoreLogic.js
import { useEffect, useState } from 'react';
import { computeScores } from '../computation/computation';
import playersData from '../computation/datascore';

const useScoreLogic = () => {
  const [playersWithScores, setPlayersWithScores] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const updatedPlayersData = computeScores(playersData);
    setPlayersWithScores(updatedPlayersData);
  }, []);

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
    handleBoxPress,
    handleCloseModal,
  };
};

export default useScoreLogic;
