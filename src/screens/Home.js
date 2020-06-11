/* Libraries */
import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
/* Local Files */
import {products} from '../navigations/screen_names.js';
import Button from '../components/button';
import Header from '../components/expenses_list/header.js';
import Item from '../components/expenses_list/item.js';

export default ({navigation}) => {
  const expenses = useSelector(state => state.expenses.expensesList);

  const addExp = () => navigation.navigate(products, {edit: false, item: null});
  const editExp = item => navigation.navigate(products, {edit: true, item});
  const delExp = () => alert('delete');

  // useEffect(() => {
  //   setTimeout(addExp, 0);
  // });

  return (
    <View style={home.style}>
      <FlatList
        style={home.listStyle}
        data={expenses}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<Header length={expenses.length} />}
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={() => editExp(item)}
            onLongPress={delExp}
          />
        )}
        ListFooterComponent={<View style={home.listFooter} />}
      />
      <Button style={home.button} text="+" onPress={addExp} />
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
