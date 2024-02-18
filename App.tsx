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
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { OnboardingScreenWrapper } from './src/screens/OnboardingScreen/OnboardingScreenWrapper';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const onboardingComponent = () => {
    return <OnboardingScreenWrapper/>
  }

  return (
    <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Stack.Navigator screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name='Onboarding' component={onboardingComponent}/>
          {/* <Stack.Screen name='Home' component={HomeScreen}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
