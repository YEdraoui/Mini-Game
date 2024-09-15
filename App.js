import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './Pages/StartPage';
import GamePage from './Pages/GamePage';
import EndingPage from './Pages/EndingPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen 
          name="StartPage" 
          component={StartPage} 
          options={{ title: 'Guessing Game' }}
        />
        <Stack.Screen 
          name="GamePage" 
          component={GamePage} 
          options={{ title: 'Guess the Number' }}
        />
        <Stack.Screen 
          name="EndingPage" 
          component={EndingPage} 
          options={{ title: 'Game Over' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
