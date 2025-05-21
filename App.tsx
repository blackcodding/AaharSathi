/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Image, StatusBar, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {decode as atob, encode as btoa} from 'base-64';

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
import {PortalProvider} from '@gorhom/portal';
import {Provider} from 'react-redux';
import RecipeScreen from './src/screens/RecipeScreen/RecipeScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import {StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store';

const DashboardScreen = React.lazy(
  () => import('./src/screens/DashboardScreen/DashboardScreen'),
);

if (!global.atob) {
  global.atob = atob;
}

if (!global.btoa) {
  global.btoa = btoa;
}

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const [showNetworkLogger, setShowNetworkLogger] = useState(false);

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <NavigationContainer>
        <Provider store={store}>
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
                  source={require('./src/assets/Images/NetworkLogger.png')}
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
              <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
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
        </Provider>
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
    bottom: 56,
    right: 16,
    zIndex: 1,
  },
  logger: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: DEFAULT_COLOR.CRIMSON,
    backgroundColor: DEFAULT_COLOR.RED_LIGHT,
    overflow: 'hidden',
  },
  loggerImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
