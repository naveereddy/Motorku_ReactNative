/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
const AppContainer = () => (
    <Provider store = { store } >
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => AppContainer);
