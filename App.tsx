/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from './src/screens/OnboardingScreen/OnboardingScreen';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Stack.Navigator>
          {/* <Stack.Screen name='Onboarding' component={OnboardingScreen}/> */}
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
