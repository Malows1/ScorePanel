import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from '../Style/scoreUI';
import playersData from '../computation/datascore'; // Import player data
import {computeScores} from '../computation/computation'; // Import score computation function

const Score = () => {
  const img = require('../images/spade.png');
  const [playersWithScores, setPlayersWithScores] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Calculate scores for players
    const updatedPlayersData = computeScores(playersData);

    // Set players with scores
    setPlayersWithScores(updatedPlayersData);
  }, []);

  const handleBoxPress = player => {
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
  };

  return (
    <SafeAreaView style={styles.BG}>
      <View style={styles.container}>
        <Image source={img} style={styles.spade} />

        <View style={styles.boxContainer}>
          {playersWithScores.slice(0, 4).map((player, index) => (
            <TouchableOpacity
              key={player.id}
              onPress={() => handleBoxPress(player)}
              style={styles.Pcontainer}>
              <View style={styles.box}>
                <Text style={styles.player}>
                  Player Name: {player.nickname}
                </Text>
                <Text style={styles.round}>Round: {player.roundCount}</Text>
                <View style={styles.scorebox}>
                  <Text style={styles.score}> {player.score}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}>
          <View style={styles.container}>
            <Image source={img} style={styles.spade} />

            <View style={styles.modalContent}>
              {selectedPlayer && (
                <View style={styles.modalStyles}>
                  <Text style={styles.modalPlayerName}>
                    Player Name: {selectedPlayer.nickname}
                  </Text>
                  <Text style={styles.modalRound}>
                    Round: {selectedPlayer.roundCount}
                  </Text>
                  <Text style={styles.modalScore}>
                    Score: {selectedPlayer.score}
                  </Text>

                  <Text style={styles.modalTitle}>
                    Scores of Other Players:
                  </Text>
                  {playersWithScores.map((player, index) => (
                    <View key={player.id}>
                      <Text style={styles.otherplayer}>
                        {player.nickname}: {player.score}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
              <TouchableOpacity
                onPress={handleCloseModal}
                style={styles.Modalbutton}>
                <Text style={styles.ModalbuttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Score;
