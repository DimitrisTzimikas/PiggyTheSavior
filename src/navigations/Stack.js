/* Libraries */
import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
/* Local Files */
import {HomeScreen, ProductsScreen} from '../screens/index.js';
import {home, products} from '../navigations/screen_names.js';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName={home}
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    animation="fade">
    <Stack.Screen name={home} component={HomeScreen} />
    <Stack.Screen name={products} component={ProductsScreen} />
  </Stack.Navigator>
);
