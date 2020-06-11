/* Libraries */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
/* Local Files */
import Header from '../components/products/list/header.js';
import Item from '../components/products/list/item.js';
import Buttons from '../components/products/buttons.js';
import TopInputs from '../components/products/top_inputs.js';
import Modal from '../components/modals/product.js';
import {home} from '../navigations/screen_names.js';
import {createExpense, updateExpense} from '../redux/ducks/expenses.js';

export default ({navigation, route}) => {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({});
  const [product, setProduct] = useState({id: '', name: '', cost: ''});
  const [showModal, setShowModal] = useState(false);
  const [itemID, setItemID] = useState('');
  const [editProduct, setEditProduct] = useState(false);

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
    } else {
      dispatch(createExpense(expense));
    }
    navigation.navigate(home);
  };
  const cancelBtn = () => navigation.navigate(home);
  const changeTitle = text => setExpense(prev => ({...prev, title: text}));
  const changeAmount = text => setExpense(prev => ({...prev, amount: text}));
  const clearAmount = () => setExpense(prev => ({...prev, amount: ''}));
  const findRemainder = () => {
    const sum = expense.productsList.reduce(
      (acc, item) => (acc += Number(item.cost)),
      0,
    );
    setExpense(prev => ({...prev, remainder: expense.amount - sum}));
  };
  const toggleModal = id => {
    if (typeof id === typeof '') {
      console.log(typeof id);

      return;
    }

    setShowModal(!showModal);
    setProduct(prev => ({...prev, name: '', cost: ''}));
  };
  const changeProduct = (key, value) =>
    setProduct(prev => ({...prev, [key]: value}));
  const saveProduct = () => {
    if (editProduct) {
    } else {
      setProduct(prev => ({...prev, id: uuidv4()}));

      if (route.params.edit) {
        setExpense(prev => ({
          ...prev,
          productsList: [...prev.productsList, product],
        }));
        findRemainder();
        dispatch(updateExpense(expense));
      } else {
      }
    }
    toggleModal();
  };

  return (
    <View style={productS.container}>
      <TopInputs
        expense={expense}
        changeTitle={changeTitle}
        changeAmount={changeAmount}
        clearAmount={clearAmount}
        findRemainder={findRemainder}
      />
      <FlatList
        style={productS.list}
        data={expense.productsList}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header onPress={toggleModal} />}
        renderItem={({item}) => (
          <Item item={item} onPress={() => toggleModal(item.id)} />
        )}
        ListFooterComponent={() => <View style={productS.footer} />}
      />
      <Buttons onPressSave={saveBtn} onPressCancel={cancelBtn} />
      <Modal
        isVisible={showModal}
        toggle={toggleModal}
        product={product}
        changeProduct={changeProduct}
        saveProduct={saveProduct}
      />
    </View>
  );
};

const productS = StyleSheet.create({
  container: {flex: 1},
  list: {flex: 1},
  footer: {height: 80},
});
