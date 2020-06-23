/* Libraries */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default ({deleteItem, toggleCheckBox}) => (
  <View style={hidden.container}>
    <TouchableOpacity style={hidden.rightButton1} onPress={deleteItem}>
      <Text style={hidden.text}>Delete</Text>
    </TouchableOpacity>
    <TouchableOpacity style={hidden.rightButton2} onPress={toggleCheckBox}>
      <Text style={hidden.text}>Multiple</Text>
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
  rightButton1: {
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
  rightButton2: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 5,
    top: 0,
    backgroundColor: 'blue',
    right: 82,
    padding: 10,
  },
  text: {
    color: 'white',
    padding: 5,
  },
});
