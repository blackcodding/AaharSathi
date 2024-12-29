/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, View, useColorScheme} from 'react-native';

import AuthenticationScreen from './src/screens/AuthenticationScreen/AuthenticationScreen';
import CreateListScreen from './src/screens/CreateListScreen/CreateListScreen';
import {DEFAULT_COLOR} from './src/Theme/Theme';
// import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';
import ExpiringSoonScreen from './src/screens/ExpiringSoonScreen/ExpiringSoonScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import MyListScreen from './src/screens/MyListScreen/MyListScreen';
import {NavigationContainer} from '@react-navigation/native';
import NetworkLogger from 'react-native-network-logger';
import {OnboardingScreenWrapper} from './src/screens/OnboardingScreen/OnboardingScreenWrapper';
import {PortalProvider} from '@gorhom/portal';
import RecipeScreen from './src/screens/RecipeScreen/RecipeScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//TODO: Add Suspense
const DashboardScreen = React.lazy(
  () => import('./src/screens/DashboardScreen/DashboardScreen'),
);

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const [showNetworkLogger, setShowNetworkLogger] = useState(false);

  const OnboardingScreen = () => {
    return <OnboardingScreenWrapper />;
  };

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      {showNetworkLogger && (
        <View style={styles.networkLoggerContainer}>
          <NetworkLogger />
        </View>
      )}
      <NavigationContainer>
        <PortalProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={DEFAULT_COLOR.WHITE}
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
            <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
            <Stack.Screen
              name={'AuthenticationScreen'}
              component={AuthenticationScreen}
            />
            <Stack.Screen
              name={'ForgotPasswordScreen'}
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name={'OnboardingScreen'}
              component={OnboardingScreen}
            />
            <Stack.Screen
              name={'DashboardScreen'}
              component={DashboardScreen}
            />
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'MyListScreen'} component={MyListScreen} />
            <Stack.Screen
              name={'CreateListScreen'}
              component={CreateListScreen}
            />
            <Stack.Screen
              name={'ExpiringSoonScreen'}
              component={ExpiringSoonScreen}
            />
            <Stack.Screen name={'RecipeScreen'} component={RecipeScreen} />
          </Stack.Navigator>
        </PortalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  networkLoggerContainer: {
    height: '100%',
  },
});

export default App;
