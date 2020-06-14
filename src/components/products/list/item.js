/* Libraries */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {euro} from '../../../styles/signs.js';
/* Local Files */

export default ({item, onPress, onLongPress}) => (
  <TouchableOpacity
    style={list.button}
    onPress={onPress}
    onLongPress={onLongPress}>
    <Text style={list.text} numberOfLines={1}>
      {item.name}
    </Text>
    <Text style={list.cost}>
      {item.cost} {euro}
    </Text>
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
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontSize: 20,
  },
  cost: {
    flex: 0.4,
    textAlign: 'right',
    fontSize: 20,
  },
});
