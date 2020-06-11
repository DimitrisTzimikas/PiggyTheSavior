/* Libraries */
import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
/* Local Files */
import {euro} from '../../styles/signs.js';
import {decimal} from '../../functions/decimal.js';

export default ({
  expense,
  changeTitle,
  changeAmount,
  clearAmount,
  findRemainder,
}) => (
  <View style={inputs.container}>
    <TextInput
      style={inputs.title}
      placeholder={'Enter title'}
      value={expense.title}
      onChangeText={changeTitle}
    />

    <View style={inputs.titles}>
      <Text style={inputs.text}>{'Budget'}</Text>
      <Text style={inputs.text}>{'Remainder'}</Text>
    </View>

    <View style={inputs.values}>
      <TextInput
        style={inputs.amount}
        keyboardType={'numeric'}
        placeholder={'0'}
        /* onFocus={clearAmount} */
        onSubmitEditing={findRemainder}
        onEndEditing={findRemainder}
        value={expense.amount + ''}
        onChangeText={changeAmount}
      />
      <Text style={inputs.remainder}>{decimal(expense.remainder)}</Text>
    </View>
  </View>
);

const inputs = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

    height: 40,
    width: '90%',

    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  titles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    width: '30%',
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  amount: {
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

    height: 40,
    width: '30%',
    textAlign: 'center',
  },
  remainder: {
    backgroundColor: 'white',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

    height: 40,
    width: '30%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
