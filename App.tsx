/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Image, StatusBar, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';

import AuthenticationScreen from './src/screens/AuthenticationScreen/AuthenticationScreen';
import CreateListScreen from './src/screens/CreateListScreen/CreateListScreen';
import {DEFAULT_COLOR} from './src/Theme/Theme';
import DraggableView from './src/assets/Elements/DraggableView';
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
import {TouchableRipple} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';

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
      <NavigationContainer>
        <PortalProvider>
          <DraggableView containerStyle={styles.loggerContainer}>
            <TouchableRipple
              borderless={true}
              onPress={() => {
                setShowNetworkLogger(status => !status);
              }}
              style={styles.logger}>
              <Image
                style={styles.loggerImage}
                source={{
                  uri: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Shinchan.jpg?updatedAt=1727286136981',
                }}
              />
            </TouchableRipple>
          </DraggableView>

          {showNetworkLogger && (
            <View style={styles.networkLoggerContainer}>
              <NetworkLogger />
            </View>
          )}
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
  loggerContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  logger: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: DEFAULT_COLOR.RED_LIGHT,
    overflow: 'hidden',
  },
  loggerImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
