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

  const onboardingComponent = () => {
    return <OnboardingScreen skipText={'Skip'} imageUrl={'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'} text={'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.'}/>
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
