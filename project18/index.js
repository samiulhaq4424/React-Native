/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*********************************Changes made by me*****************************************/
//written by me
import { Provider } from 'react-redux';
import store from './components/redux/store';

const AppRedux = ()=> (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
// AppRegistry.registerComponent(appName, () => App);
/*******************************************************************************************/
