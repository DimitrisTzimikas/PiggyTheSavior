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
import colors from '../styles/colors.js';
import {
  createExpense,
  removeExpense,
  showExpensesCheckboxes,
  isExpenseSelected,
  selectDeselectAll,
} from '../redux/ducks/expenses.js';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.list);
  const showExpensesCheckBox = useSelector(
    state => state.expenses.showExpensesCheckBox,
  );
  const isSelectAll = useSelector(
    state => state.expenses.toggleExpensesSelectAllButton,
  );
  const [showModal, setShowModal] = useState(false);

  const goToCreatePage = () => {
    const id = uuidv4();
    dispatch(createExpense(id));
    navigation.navigate(products, {id});
  };
  const goToEditPage = id => navigation.navigate(products, {id});
  const deleteExpenses = () => {
    dispatch(removeExpense());
    setShowModal(!showModal);
  };
  const toggleDeleteModal = () => setShowModal(!showModal);
  const toggleCheckBox = expenseID =>
    dispatch(showExpensesCheckboxes(expenseID));
  const toggleExpenseCheckbox = expenseID =>
    dispatch(isExpenseSelected(expenseID));
  const toggleSelectAll = () => dispatch(selectDeselectAll());

  return (
    <View style={home.style}>
      <ExpensesList
        style={home}
        data={expenses}
        editItem={goToEditPage}
        showCheckBox={showExpensesCheckBox}
        toggleCheckBox={toggleCheckBox}
        toggleExpenseCheckbox={toggleExpenseCheckbox}
        isSelectAll={isSelectAll}
        toggleSelectAll={toggleSelectAll}
      />
      {showExpensesCheckBox ? (
        <>
          <Button
            style={home.deleteButton}
            text="Delete"
            onPress={toggleDeleteModal}
          />
          <Button
            style={home.cancelButton}
            text="Cancel"
            onPress={toggleCheckBox}
          />
        </>
      ) : null}
      <Button style={home.button} text="+" onPress={goToCreatePage} />
      <Modal
        isVisible={showModal}
        onBackdropPress={toggleDeleteModal}
        onPress={deleteExpenses}
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
  deleteButton: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.deleteButton,
    bottom: 120,
  },
  cancelButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 70,
  },
  listStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  listFooter: {height: 80},
});
