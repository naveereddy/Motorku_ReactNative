/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'
import { Provider } from 'react-redux';

import configureStore from './src/reducers'

const store = configureStore()

const AppContainer = () => (
    <Provider store = { store } >
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => AppContainer);
