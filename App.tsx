/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, useColorScheme} from 'react-native';

import CreateListScreen from './src/screens/CreateListScreen/CreateListScreen';
import {DEFAULT_COLOR} from './src/Theme/Theme';
import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';
import ExpiringSoonScreen from './src/screens/ExpiringSoonScreen/ExpiringSoonScreen';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import MyListScreen from './src/screens/MyListScreen/MyListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingScreenWrapper} from './src/screens/OnboardingScreen/OnboardingScreenWrapper';
import React from 'react';
import RecipeScreen from './src/screens/RecipeScreen/RecipeScreen';
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
        {/* <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} /> */}
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'MyListScreen'} component={MyListScreen} />
        <Stack.Screen name={'CreateListScreen'} component={CreateListScreen} />
        <Stack.Screen
          name={'ExpiringSoonScreen'}
          component={ExpiringSoonScreen}
        />
        <Stack.Screen name={'RecipeScreen'} component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
