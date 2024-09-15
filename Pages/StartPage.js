import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const StartPage = ({ navigation }) => {
  const startGameHandler = () => {
    navigation.navigate('GamePage');
  };

  return (
    <Animatable.View animation="fadeInUp" duration={1500} style={styles.container}>
      <Text style={styles.title}>Guess the Number!</Text>
      <Text style={styles.instructions}>
        The system will try to guess your number. Give hints: higher, lower, or correct!
      </Text>

      <TouchableOpacity style={styles.button} onPress={startGameHandler}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00BFFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5, // Button shadow effect
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StartPage;
