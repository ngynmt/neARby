import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Navigator
} from 'react-native';
import mainView from './mainView';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import wrapper from '../../index.ios.js';

const ROUTES = {
  mainView: mainView
}

const TITLES = {
  mainView: 'Main'
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  renderScene(route, navigator) {
    let Component = ROUTES[route.name];
    return (
      <Component
      route={route}
      navigator={navigator} />
    );
  }
  render() {
    return (
      <Navigator initialRoute={{ name: 'mainView', index: 0 }}
      style={ styles.container }
      renderScene={ this.renderScene.bind(this) }
      configureScene={ () => {return Navigator.SceneConfigs.FloatFromRight;} } 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;