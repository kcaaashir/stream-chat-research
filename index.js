/**
 * @format
 */import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './Home'
// import Channel from './channel'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
