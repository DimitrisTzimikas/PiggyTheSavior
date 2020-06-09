/* Libraries */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default ({onPress}) => (
  <View style={list.container}>
    <Text style={list.expenses}>{'Expenses'}</Text>
    <TouchableOpacity style={list.button} onPress={onPress}>
      <Text style={list.text}>+</Text>
    </TouchableOpacity>
  </View>
);

const list = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#efa2cf',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 3,
    marginLeft: 3,
    borderRadius: 3,
    elevation: 5,
  },
  expenses: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 50,
  },
  button: {
    width: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    elevation: 3,
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
