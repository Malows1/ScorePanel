import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Style/scoreUI';
import playersData from '../computation/datascore'; // Import player data
import {computeScores} from '../computation/computation'; // Import score computation function

const Score = () => {
  const img = require('../images/spade.png');
  const [highestScorePlayer, setHighestScorePlayer] = useState(null);

  useEffect(() => {
    // Calculate scores for players
    const updatedPlayersData = computeScores(playersData);

    // Find the player with the highest score
    const winner = updatedPlayersData.reduce((prevPlayer, currentPlayer) => {
      return currentPlayer.score > prevPlayer.score
        ? currentPlayer
        : prevPlayer;
    });

    setHighestScorePlayer(winner);
  }, []);

  return (
    <SafeAreaView style={styles.BG}>
      <View style={styles.container}>
        <Image source={img} style={styles.spade} />
        <Text style={styles.title}>Score</Text>

        {highestScorePlayer && (
          <View key={highestScorePlayer.id}>
            <Text style={styles.player}>
              Player Name: {highestScorePlayer.nickname}
            </Text>
            <Text style={styles.round}>
              Round: {highestScorePlayer.roundCount}
            </Text>
            <View style={styles.scorebox}>
              <Text style={styles.score}> {highestScorePlayer.score}</Text>
            </View>
          </View>
        )}
        <TouchableOpacity  style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Score;
