import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from '../Style/scoreUI';
import useScoreLogic from '../computation/Scorelogic'; // Import logic hook

const Score = () => {
  const {
    playersWithScores,
    selectedPlayer,
    modalVisible,
    handleBoxPress,
    handleCloseModal,
  } = useScoreLogic();

  const img = require('../images/spade.png');
  const bg = require('../images/bg.png');

  // Sort players based on score in descending order
  const sortedPlayers = [...playersWithScores].sort(
    (a, b) => b.score - a.score,
  );

  // Filter out the selected player from the list of other players
  const otherPlayers = sortedPlayers.filter(
    player => player !== selectedPlayer,
  );

  return (
    <SafeAreaView>
      <Image source={bg} style={styles.bg} />
      <View style={styles.container}>
        <Image source={img} style={styles.spade} />
        <TouchableOpacity
          onPress={() => console.log('Close button pressed')}
          style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>

        <View style={styles.boxContainer}>
          {sortedPlayers.slice(0, 4).map((player, index) => (
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
                  <Text style={styles.modalScore}>{selectedPlayer.score}</Text>
                  <Text style={styles.modalScore}>Score</Text>
                  <Text style={styles.modalTitle}>
                    Scores of Other Players:
                  </Text>
                  {otherPlayers.map((player, index) => (
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
