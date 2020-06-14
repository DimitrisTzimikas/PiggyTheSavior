/* Libraries */
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
/* Local Files */
import Button from '../components/button';
import ExpensesList from '../components/expenses_list/flatList.js';
import Modal from '../components/modals/delete.js';
import {products} from '../navigations/screen_names.js';
import {createExpense, removeExpense} from '../redux/ducks/expenses.js';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.list);
  const [showModal, setShowModal] = useState(false);
  const [itemID, setItemID] = useState('');

  const createItem = () => {
    const id = uuidv4();
    dispatch(createExpense(id));
    navigation.navigate(products, {id});
  };
  const editItem = id => {
    navigation.navigate(products, {id});
  };
  const delItem = () => {
    dispatch(removeExpense(itemID));
    setShowModal(!showModal);
  };
  const toggleModal = id => {
    setItemID(id);
    setShowModal(!showModal);
  };

  return (
    <View style={home.style}>
      <ExpensesList
        data={expenses}
        style={home}
        edit={editItem}
        toggle={toggleModal}
      />
      <Button style={home.button} text="+" onPress={createItem} />
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
