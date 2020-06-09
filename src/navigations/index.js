/* Libraries */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
/* Local Files */
import StackNavigator from './Stack.js';
import {barStyle, statusBar} from '../styles/colors.js';

const Navigations = () => (
  <NavigationContainer>
    <StatusBar backgroundColor={statusBar} barStyle={barStyle} />
    <StackNavigator />
  </NavigationContainer>
);

export default Navigations;
