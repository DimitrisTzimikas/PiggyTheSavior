/* Libraries */
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
/* Local Files */
import {products} from '../navigations/screen_names.js';
import Button from '../components/button';
import Header from '../components/expenses_list/header.js';
import Item from '../components/expenses_list/item.js';

export default ({navigation}) => {
  const expenses = useSelector(state => state.expenses.expensesList);

  const add = () => navigation.navigate(products, {edit: false});
  const edit = item => navigation.navigate(products, {edit: true, item});
  const del = () => alert('delete');

  return (
    <View style={home.style}>
      <FlatList
        style={home.listStyle}
        data={expenses}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<Header />}
        renderItem={({item}) => (
          <Item item={item} onPress={() => edit(item)} onLongPress={del} />
        )}
        ListFooterComponent={<View style={home.listFooter} />}
      />
      <Button style={home.button} text="+" onPress={add} />
    </View>
  );
};

const home = StyleSheet.create({
  style: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  listStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  listFooter: {height: 80},
});
