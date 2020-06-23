/* Libraries */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
/* Local Files */
import StackNavigator from './Stack.js';
import colors from '../styles/colors.js';

export default () => (
  <NavigationContainer>
    <StatusBar backgroundColor={colors.statusBar} barStyle={colors.barStyle} />
    <StackNavigator />
  </NavigationContainer>
);
