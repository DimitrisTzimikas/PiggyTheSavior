/* Libraries */
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
/* Local Files */
import Button from '../components/button.js';
import TopInputs from '../components/products/top_inputs.js';
import ProductModal from '../components/modals/product.js';
import DeleteModal from '../components/modals/delete.js';
import ProductsList from '../components/products/list/flatList.js';
import {
  updateExpense,
  createProduct,
  removeProduct,
} from '../redux/ducks/expenses.js';

export default ({navigation, route}) => {
  const dispatch = useDispatch();
  const expense = useSelector(state =>
    state.expenses.list.find(i => i.id === route.params.id),
  );
  const [showProductModal, setShowProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productID, setProductID] = useState('');

  const changeTitle = text =>
    dispatch(updateExpense('title', text, route.params.id));
  const changeBudget = text =>
    dispatch(updateExpense('budget', text, route.params.id));
  const changeProductName = text =>
    dispatch(updateExpense('name', text, route.params.id, productID));
  const changeProductCost = text =>
    dispatch(updateExpense('cost', text, route.params.id, productID));
  const toggleProductModal = (id, createProductItem) => {
    if (createProductItem) {
      const prdID = uuidv4();
      dispatch(createProduct(route.params.id, prdID));
      setProductID(prdID);
    } else {
      setProductID(id);
    }
    setShowProductModal(!showProductModal);
  };
  const toggleDeleteModal = id => {
    setShowDeleteModal(!showDeleteModal);
    setProductID(id);
  };
  const delProduct = () => {
    dispatch(removeProduct(route.params.id, productID));
    setShowDeleteModal(!showDeleteModal);
  };
  const backButton = () => navigation.popToTop();

  return (
    <View style={product.container}>
      <TopInputs
        expense={expense}
        changeTitle={changeTitle}
        changeBudget={changeBudget}
      />
      <ProductsList
        style={product}
        data={expense.productsList}
        toggleEdit={toggleProductModal}
        toggleDelete={toggleDeleteModal}
      />
      <Button style={product.button} text={'Back'} onPress={backButton} />
      <ProductModal
        isVisible={showProductModal}
        toggle={toggleProductModal}
        product={expense.productsList.find(i => i.id === productID) || ''}
        changeProductName={changeProductName}
        changeProductCost={changeProductCost}
      />
      <DeleteModal
        isVisible={showDeleteModal}
        toggle={toggleDeleteModal}
        del={delProduct}
      />
    </View>
  );
};

const product = StyleSheet.create({
  container: {flex: 1},
  list: {flex: 1},
  footer: {height: 80},
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
});
