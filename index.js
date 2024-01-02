/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { firebase } from '@react-native-firebase/app';

// // Add this line to initialize Firebase
// firebase.initializeApp();

AppRegistry.registerComponent(appName, () => App);
