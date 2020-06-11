/* Libraries */
import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
/* Local Files */
import Button from '../components/button';
import Header from '../components/expenses_list/header.js';
import Item from '../components/expenses_list/item.js';
import Modal from '../components/modals/delete.js';
import {products} from '../navigations/screen_names.js';
import {removeExpense} from '../redux/ducks/expenses.js';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.expensesList);
  const [showModal, setShowModal] = useState(false);
  const [itemID, setItemID] = useState('');

  const addItem = () =>
    navigation.navigate(products, {edit: false, item: null});
  const editItem = item => navigation.navigate(products, {edit: true, item});
  const delItem = () => {
    dispatch(removeExpense(itemID));
    setShowModal(!showModal);
  };
  const toggleModal = id => {
    setShowModal(!showModal);
    setItemID(id);
  };

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
            onPress={() => editItem(item)}
            onLongPress={() => toggleModal(item.id)}
          />
        )}
        ListFooterComponent={<View style={home.listFooter} />}
      />
      <Button style={home.button} text="+" onPress={addItem} />
      <Modal isVisible={showModal} toggle={toggleModal} del={delItem} />
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
