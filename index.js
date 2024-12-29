/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {startNetworkLogging} from 'react-native-network-logger';

startNetworkLogging();
AppRegistry.registerComponent(appName, () => App);
