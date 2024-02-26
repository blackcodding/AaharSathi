/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {DEFAULT_COLOR} from './src/Theme/Fonts';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingScreenWrapper} from './src/screens/OnboardingScreen/OnboardingScreenWrapper';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const OnboardingScreen = () => {
    return <OnboardingScreenWrapper />;
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={DEFAULT_COLOR.WHITE}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
