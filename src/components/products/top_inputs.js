/* Libraries */
import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
/* Local Files */
import {decimal} from '../../functions/decimal.js';

export default ({expense, changeTitle, changeBudget, findRemainder}) => (
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
        style={inputs.budget}
        keyboardType={'numeric'}
        placeholder={'0'}
        onSubmitEditing={findRemainder}
        onEndEditing={findRemainder}
        value={expense.budget + ''}
        onChangeText={changeBudget}
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

    fontSize: 20,
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
  budget: {
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    fontSize: 15,
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
    fontSize: 15,
    width: '30%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
