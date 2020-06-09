/* Libraries */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
/* Local Files */

export default ({item, onPress}) => (
  <TouchableOpacity style={list.button} onPress={onPress}>
    <Text style={list.text} numberOfLines={1}>
      {item.name}
    </Text>
    <Text style={list.cost}>{item.cost}</Text>
  </TouchableOpacity>
);

const list = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#efc3d6',
    borderRadius: 5,
    margin: 6,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  cost: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
});
