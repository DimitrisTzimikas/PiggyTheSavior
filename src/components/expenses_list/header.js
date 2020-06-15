/* Libraries */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {main} from '../../styles/colors.js';

export default ({length}) => (
  <>
    <View style={list.header}>
      <Text style={list.text}>Expenses List</Text>
    </View>
    {length ? (
      <View style={list.infoView}>
        <Text style={list.info}>Sum.</Text>
        <Text style={list.info}>Rem.</Text>
      </View>
    ) : null}
  </>
);

const list = StyleSheet.create({
  header: {
    backgroundColor: main,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '100',
  },
  infoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    elevation: 1,
  },
  info: {
    fontSize: 19,
    fontWeight: '100',
    padding: 11,
  },
});
