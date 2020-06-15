/* Libraries */
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
/* Local Files */
import Button from '../components/button.js';
import ExpensesList from '../components/expenses_list/flatList.js';
import Modal from '../components/modals/delete.js';
import {products} from '../navigations/screen_names.js';
import {createExpense, removeExpense} from '../redux/ducks/expenses.js';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.list);
  const [showModal, setShowModal] = useState(false);
  const [itemID, setItemID] = useState('');
  const [array, setArray] = useState([]);

  const createItem = () => {
    const id = uuidv4();
    dispatch(createExpense(id));
    navigation.navigate(products, {id});
  };
  const editItem = id => navigation.navigate(products, {id});
  const delItem = () => {
    if (itemID === 'multiple') {
      array.forEach(id => {
        dispatch(removeExpense(id));
      });
    } else {
      dispatch(removeExpense(itemID));
    }
    setShowModal(!showModal);
  };
  const toggleDeleteModal = id => {
    if (typeof id === 'string') {
      setItemID(id);
    }
    setShowModal(!showModal);
  };
  const updateArray = (id, add) => {
    if (add) {
      setArray([...array, id]);
    } else {
      setArray([...array.filter(i => i !== id)]);
    }
  };
  const deleteMultiple = () => {
    toggleDeleteModal('multiple');
  };

  return (
    <View style={home.style}>
      <ExpensesList
        style={home}
        data={expenses}
        editItem={editItem}
        toggleDeleteModal={toggleDeleteModal}
        updateArray={updateArray}
        deleteMultiple={deleteMultiple}
      />
      <Button style={home.button} text="+" onPress={createItem} />
      <Modal
        isVisible={showModal}
        toggleDeleteModal={toggleDeleteModal}
        delItem={delItem}
      />
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
