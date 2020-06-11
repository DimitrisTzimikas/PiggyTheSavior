/* Libraries */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
/* Local Files */
import {home} from '../navigations/screen_names.js';
import Header from '../components/products/list/header.js';
import Item from '../components/products/list/item.js';
import Buttons from '../components/products/buttons.js';
import TopInputs from '../components/products/top_inputs.js';
import {createExpense, updateExpense} from '../redux/ducks/expenses.js';

export default ({navigation, route}) => {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({});

  useEffect(() => {
    if (route.params.edit) {
      setExpense(prev => ({...prev, ...route.params.item}));
      return;
    }

    setExpense(prev => ({...prev, amount: '', productsList: []}));
  }, [route.params.edit, route.params.item]);

  const saveBtn = () => {
    Keyboard.dismiss();
    if (route.params.edit) {
      dispatch(updateExpense(expense, route.params.item.id));
      return;
    }
    dispatch(createExpense(expense));
  };
  const cancelBtn = () => navigation.navigate(home);
  const changeTitle = text => setExpense(prev => ({...prev, title: text}));
  const changeAmount = text => setExpense(prev => ({...prev, amount: text}));
  const clearAmount = () => setExpense(prev => ({...prev, amount: ''}));
  const findRemainder = () => {
    const sum = expense.productsList.reduce(
      (acc, item) => (acc += item.cost),
      0,
    );
    setExpense(prev => ({...prev, remainder: expense.amount - sum}));
  };

  return (
    <View style={product.container}>
      <TopInputs
        expense={expense}
        changeTitle={changeTitle}
        changeAmount={changeAmount}
        clearAmount={clearAmount}
        findRemainder={findRemainder}
      />
      <FlatList
        style={product.list}
        data={expense.productsList}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header onPress={() => alert('ok')} />}
        renderItem={({item}) => (
          <Item item={item} onPress={() => alert('ok')} />
        )}
        ListFooterComponent={() => <View style={product.footer} />}
      />
      <Buttons onPressSave={saveBtn} onPressCancel={cancelBtn} />
    </View>
  );
};

const product = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {flex: 1},
  footer: {height: 80},
});
