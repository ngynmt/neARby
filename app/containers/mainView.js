import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';
import index from '../../index.ios.js';
import Camera from 'react-native-camera';
// this loads the three.js DeviceOrientationControls library
import DeviceOrientationControls from '../lib/DeviceOrientationControls';
import RenderScene from '../lib/RenderScene';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

const html = 
`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>three.js webgl - controls - deviceorientation</title>
      <meta charset="utf-8">
      <meta name="viewport" content="user-scalable=no, initial-scale=1">
      <style>
       body {
         margin: 0px;
         background-color: #000000;
         overflow: hidden;
         background-color: transparent;
       }

       #info {
         position: absolute;
         top: 0px; width: 100%;
         color: #ffffff;
         padding: 5px;
         font-family:Monospace;
         font-size:13px;
         font-weight: bold;
         text-align:center;
       }

       a {
         color: #ff8800;
       }
      </style>
    </head>
    <body>

      <div id="container"></div>

      <div id="info">
        <a href="http://threejs.org" target="_blank">three.js</a> - equirectangular panorama demo with DeviceOrientation controls.
        photo by <a href="http://www.flickr.com/photos/jonragnarsson/2294472375/" target="_blank">Jón Ragnarsson</a>.
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
      ${DeviceOrientationControls};
      ${RenderScene};
    </body>
  </html>
`

class mainView extends Component {
  constructor() {
    super();
    this.store = this.props.store;
  }

  componentDidMount() {
    this.props.actions.fetchPlaces();
    // this.props.actions.fetchEvents();
    console.log(this.props);
  }

  // on movement, will have to fetch places/events again

  render() {
    return (
      <View style={{flex: 1}}>
      <Camera
        ref={(cam) => {
        this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <WebView
          source={{html}}
          style={{backgroundColor: 'transparent'}}
        />
      </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)'
  },
  preview: {
    flex: 1
  }
});

function stateToProps(state) {
console.log(state);
  return {
    places: state.places
  };
}

function dispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(stateToProps, dispatchToProps)(mainView);
