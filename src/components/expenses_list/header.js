/* Libraries */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => (
  <View style={list.header}>
    <Text style={list.text}>Expenses List</Text>
  </View>
);

const list = StyleSheet.create({
  header: {
    backgroundColor: '#efa2cf',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 3,
    marginLeft: 3,
    borderRadius: 3,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '100',
  },
});
