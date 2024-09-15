import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable';

const EndingPage = ({ route, navigation }) => {
  const { guessCount } = route.params;
  const [previousGames, setPreviousGames] = useState([]);

  useEffect(() => {
    const loadPreviousGames = async () => {
      const storedGames = await AsyncStorage.getItem('games');
      setPreviousGames(storedGames ? JSON.parse(storedGames) : []);
    };

    loadPreviousGames();

    const saveGame = async () => {
      const updatedGames = [...previousGames, guessCount];
      setPreviousGames(updatedGames);
      await AsyncStorage.setItem('games', JSON.stringify(updatedGames));
    };

    saveGame();
  }, [guessCount]);

  return (
    <Animatable.View animation="fadeInUp" duration={1500} style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      <Animatable.Text animation="bounceIn" style={styles.subtitle}>
        The system guessed your number in {guessCount} tries!
      </Animatable.Text>

      <Text style={styles.topScores}>Previous Games:</Text>
      {previousGames.map((game, index) => (
        <Text key={index} style={styles.gameResult}>
          Game {index + 1}: {game} guesses
        </Text>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StartPage')}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  topScores: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  gameResult: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#00BFFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EndingPage;
