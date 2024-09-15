import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const GamePage = ({ navigation }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [currentGuess, setCurrentGuess] = useState(50);
  const [lastGuess, setLastGuess] = useState(null);
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    if (lastGuess !== null) setGuessCount(guessCount + 1);
  }, [currentGuess]);

  const moreHandler = () => {
    setLastGuess(currentGuess);
    setMin(currentGuess + 1);
    setCurrentGuess(Math.floor((currentGuess + max) / 2));
  };

  const lessHandler = () => {
    setLastGuess(currentGuess);
    setMax(currentGuess - 1);
    setCurrentGuess(Math.floor((currentGuess + min) / 2));
  };

  const correctHandler = () => {
    navigation.navigate('EndingPage', { guessCount });
  };

  return (
    <Animatable.View animation="fadeIn" style={styles.container}>
      <Text style={styles.title}>System's Guess: {currentGuess}</Text>

      {lastGuess !== null && (
        <Animatable.Text animation="pulse" duration={600} style={styles.lastGuess}>
          Last Guess: {lastGuess}
        </Animatable.Text>
      )}

      <Text style={styles.subtitle}>Is your number higher or lower?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={moreHandler}>
          <Text style={styles.buttonText}>Higher</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.correctButton]} onPress={correctHandler}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={lessHandler}>
          <Text style={styles.buttonText}>Lower</Text>
        </TouchableOpacity>
      </View>

      <Animatable.Text animation="bounceIn" style={styles.guessCount}>
        Guesses: {guessCount}
      </Animatable.Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Take full height of the screen
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',  // Center horizontally
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  lastGuess: {
    fontSize: 22,
    color: '#999',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  // Space buttons evenly
    width: '100%',  // Ensure buttons span the full width for even spacing
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexGrow: 1,  // Make each button flexible to occupy the same width
    marginHorizontal: 5,  // Add spacing between buttons
    alignItems: 'center',
  },
  correctButton: {
    backgroundColor: '#32CD32',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  guessCount: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
  },
});

export default GamePage;
