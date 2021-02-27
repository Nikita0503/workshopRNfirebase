/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as FCMService from './src/services/FCMService';

FCMService.onStartBackgroundHandler();

AppRegistry.registerComponent(appName, () => App);
