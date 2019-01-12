

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Home } from './src/Route';
import Main from './src/Components/Auth/Main';
export default class App extends Component{
  render() {
    return (
     // < Home />
     <Main/>
    );
  }
}

