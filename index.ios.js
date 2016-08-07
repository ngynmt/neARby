/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Navigator
} from 'react-native';
import mainView from './app/containers/mainView';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './app/reducers/root-reducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './app/containers/App'

const logger = createLogger();
// create store
const storeConfig = function(initialState) {
  const store = createStore(
    rootReducer, initialState,
    compose (
    applyMiddleware(thunk, promise, logger)
    )
  );
  console.log('STORE CREATED ', store);
  return store;  
}

let neARby = () => (
  <Provider store={storeConfig()}>
    <App />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('neARby', () => neARby);
