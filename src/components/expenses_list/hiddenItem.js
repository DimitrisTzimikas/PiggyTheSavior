/* Libraries */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default ({deleteItem, selectMultiple, deleteMultiple}) => (
  <View style={hidden.container}>
    <TouchableOpacity style={hidden.rightButton} onPress={deleteItem}>
      <Text style={hidden.text}>Delete</Text>
    </TouchableOpacity>
    <TouchableOpacity style={hidden.leftFirstButton} onPress={selectMultiple}>
      <Text style={hidden.text}>Select Multiple</Text>
    </TouchableOpacity>
    <TouchableOpacity style={hidden.leftSecondButton} onPress={deleteMultiple}>
      <Text style={hidden.text}>Delete</Text>
    </TouchableOpacity>
  </View>
);

const hidden = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    margin: 6,
    height: 50,
  },
  rightButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 5,
    top: 0,
    backgroundColor: 'red',
    right: 0,
    padding: 10,
    width: 80,
  },
  leftFirstButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 5,
    top: 0,
    backgroundColor: 'blue',
    left: 0,
    width: 120,
  },
  leftSecondButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 5,
    top: 0,
    left: 121,
    width: 80,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    padding: 5,
  },
});
