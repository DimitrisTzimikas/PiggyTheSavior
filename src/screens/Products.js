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

export default ({navigation, route: {params}}) => {
  const dispatch = useDispatch();
  const expense = useSelector(state =>
    state.expenses.list.find(i => i.id === params.id),
  );
  const [showProductModal, setShowProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productID, setProductID] = useState('');
  const [array, setArray] = useState([]);
  const [showCheckBox, setShowCheckbox] = useState(false);

  const changeTitle = text => dispatch(updateExpense('title', text, params.id));

  const changeBudget = text =>
    dispatch(updateExpense('budget', text, params.id));

  const changeProductName = text =>
    dispatch(updateExpense('name', text, params.id, productID));

  const changeProductCost = text =>
    dispatch(updateExpense('cost', text, params.id, productID));

  const toggleProductModal = (id, createProductItem) => {
    if (createProductItem) {
      const prdID = uuidv4();
      dispatch(createProduct(params.id, prdID));
      setProductID(prdID);
    } else {
      setProductID(id);
    }
    setShowProductModal(!showProductModal);
  };

  const toggleDeleteModal = id => {
    if (typeof id === 'string') {
      setProductID(id);
    }
    setShowDeleteModal(!showDeleteModal);
  };

  const deleteProducts = () => {
    if (showCheckBox) {
      array.forEach(id => dispatch(removeProduct(params.id, id)));
    } else {
      dispatch(removeProduct(params.id, productID));
    }
    setShowDeleteModal(!showDeleteModal);
  };

  const updateArray = (id, add) => {
    if (add) {
      setArray([...array, id]);
    } else {
      setArray([...array.filter(i => i !== id)]);
    }
  };
  const backButton = () => navigation.popToTop();
  const toggleCheckBox = () => setShowCheckbox(!showCheckBox);

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
        toggleProduct={toggleProductModal}
        toggleDeleteModal={toggleDeleteModal}
        updateArray={updateArray}
        showCheckBox={showCheckBox}
        toggleCheckBox={toggleCheckBox}
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
        onBackdropPress={toggleDeleteModal}
        onPress={deleteProducts}
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
