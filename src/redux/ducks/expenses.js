/*  Types */
export const CREATE_EXP = 'CREATE_EXPENSE';
export const REMOVE_EXP = 'REMOVE_EXPENSE';
export const UPDATE_EXP = 'UPDATE_EXPENSE';
export const CREATE_PRD = 'CREATE_PRODUCT';
export const REMOVE_PRD = 'REMOVE_PRODUCT';
export const SHOW_EXPENSES_CHECKBOXES = 'SHOW_EXPENSES_CHECKBOXES';
export const SHOW_PRODUCTS_CHECKBOXES = 'SHOW_PRODUCTS_CHECKBOXES';
export const IS_EXPENSE_SELECTED = 'IS_EXPENSE_SELECTED';
export const IS_PRODUCT_SELECTED = 'IS_PRODUCT_SELECTED';
export const SELECT_DESELECT_ALL_EXPENSES = 'SELECT_DESELECT_ALL_EXPENSES';

const initialState = {
  showExpensesCheckBox: false,
  showProductsCheckBox: false,
  isAllExpensesSelected: false,
  isAllProductsSelected: false,
  toggleExpensesSelectAllButton: false,
  toggleProductsSelectAllButton: false,
  list: [
    {
      id: 'aswrwetddf',
      title: 'Weakly',
      budget: '100',
      remainder: 90,
      isExpenseSelected: false,
      productsList: [
        {id: 'asdftgb', name: 'Gums', cost: '2'},
        {id: 'asd1234f', name: 'Coffee', cost: '2'},
        {id: '1asdf', name: 'Launch', cost: '6'},
      ],
    },
    {
      id: 'a2133456345trgfdg421fsdf',
      title: 'Weakly',
      budget: '50',
      remainder: 41,
      isExpenseSelected: false,
      productsList: [
        {id: 'asdjuikf', name: 'Gums', cost: '1'},
        {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
        {id: 'asqwerfadf', name: 'Launch', cost: '6'},
      ],
    },
    {
      id: 'adfsgw5t546546sdf',
      title: 'Weakly',
      budget: '100',
      remainder: 90,
      isExpenseSelected: false,
      productsList: [
        {id: 'asdftgb', name: 'Gums', cost: '2'},
        {id: 'asd1234f', name: 'Coffee', cost: '2'},
        {id: '1asdf', name: 'Launch', cost: '6'},
      ],
    },
    {
      id: 'a21323452346trdfg421fsdf',
      title: 'Weakly',
      budget: '50',
      remainder: 41,
      isExpenseSelected: false,
      productsList: [
        {id: 'asdjuikf', name: 'Gums', cost: '1'},
        {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
        {id: 'asqwerfadf', name: 'Launch', cost: '6'},
      ],
    },
    {
      id: 'assdfvgrtv43689df',
      title: 'Weakly',
      budget: '100',
      remainder: 90,
      isExpenseSelected: false,
      productsList: [
        {id: 'asdftgb', name: 'Gums', cost: '2'},
        {id: 'asd1234f', name: 'Coffee', cost: '2'},
        {id: '1asdf', name: 'Launch', cost: '6'},
      ],
    },
  ],
};

/*  Reducers */
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_PRD:
      return {...state, list: createProductHelper(state, payload)};
    case REMOVE_PRD:
      return {...state, list: deleteProductHelper(state, payload)};
    case CREATE_EXP:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: payload,
            title: '',
            budget: '',
            remainder: 0,
            isExpenseSelected: false,
            productsList: [],
          },
        ],
      };
    case UPDATE_EXP:
      return {...state, list: [...updateHelper(state, payload)]};
    case REMOVE_EXP:
      return {
        ...state,
        showExpensesCheckBox: !state.showExpensesCheckBox,
        toggleExpensesSelectAllButton: !state.showExpensesCheckBox,
        list: [...deleteHelper(state, REMOVE_EXP)],
      };
    case SHOW_EXPENSES_CHECKBOXES:
      return {
        ...state,
        showExpensesCheckBox: !state.showExpensesCheckBox,
        toggleExpensesSelectAllButton: !state.showExpensesCheckBox,
        list: [
          ...state.list.map(expense => {
            if (state.showExpensesCheckBox) {
              return {...expense, isExpenseSelected: false};
            } else {
              if (expense.id === payload) {
                return {
                  ...expense,
                  isExpenseSelected: !expense.isExpenseSelected,
                };
              }
              return expense;
            }
          }),
        ],
      };
    case SHOW_PRODUCTS_CHECKBOXES:
      return {...state, showProductsCheckBox: !state.showProductsCheckBox};
    case IS_EXPENSE_SELECTED:
      return {
        ...state,
        list: [
          ...state.list.map(expense => {
            if (expense.id === payload) {
              return {
                ...expense,
                isExpenseSelected: !expense.isExpenseSelected,
              };
            }
            return expense;
          }),
        ],
      };
    case SELECT_DESELECT_ALL_EXPENSES:
      return {
        ...state,
        toggleExpensesSelectAllButton: !state.toggleExpensesSelectAllButton,
        list: [
          ...state.list.map(expense => {
            if (state.toggleExpensesSelectAllButton) {
              return {...expense, isExpenseSelected: true};
            } else {
              return {...expense, isExpenseSelected: false};
            }
          }),
        ],
      };
    default:
      return state;
  }
};

/*  Actions */
export const createProduct = (expID, prdID) => ({
  type: CREATE_PRD,
  payload: {expID, prdID},
});
export const removeProduct = (expID, prdID) => ({
  type: REMOVE_PRD,
  payload: {expID, prdID},
});

export const createExpense = id => ({
  type: CREATE_EXP,
  payload: id,
});
export const updateExpense = (key, value, expID, prdID = '') => ({
  type: UPDATE_EXP,
  payload: {key, value, expID, prdID},
});
export const removeExpense = () => ({type: REMOVE_EXP});

export const showExpensesCheckboxes = id => ({
  type: SHOW_EXPENSES_CHECKBOXES,
  payload: id,
});
export const showProductsCheckboxes = () => ({type: SHOW_PRODUCTS_CHECKBOXES});
export const isExpenseSelected = id => ({
  type: IS_EXPENSE_SELECTED,
  payload: id,
});
export const selectDeselectAll = () => ({type: SELECT_DESELECT_ALL_EXPENSES});

/* Helpers */
const createProductHelper = (state, payload) => {
  const newExpensesList = state.list.map(expense => {
    if (expense.id === payload.expID) {
      return {
        ...expense,
        productsList: [
          ...expense.productsList,
          {id: payload.prdID, name: '', cost: ''},
        ],
      };
    }
    return expense;
  });

  return newExpensesList;
};

const deleteProductHelper = (state, payload) => {
  const deletedList = state.list.map(expense => {
    if (expense.id === payload.expID) {
      let productCost;
      const newProductsList = expense.productsList.filter(product => {
        if (product.id === payload.prdID) {
          productCost = product.cost;
        }

        return product.id !== payload.prdID;
      });

      return {
        ...expense,
        productsList: [...newProductsList],
        remainder: Number(expense.remainder) + Number(productCost),
      };
    }
    return expense;
  });
  return deletedList;
};

const updateHelper = (state, payload) => {
  const newExpensesList = state.list.map(expense => {
    if (expense.id === payload.expID) {
      if (payload.key === 'title') {
        return {...expense, [payload.key]: payload.value};
      }

      if (payload.key === 'budget') {
        const sum = productsCost(state, payload.expID);
        return {
          ...expense,
          [payload.key]: payload.value,
          remainder: [payload.value] - sum,
        };
      }

      if (payload.key === 'name') {
        const newProductsList = expense.productsList.map(product => {
          if (product.id === payload.prdID) {
            return {
              ...product,
              [payload.key]: payload.value,
            };
          }
          return product;
        });

        return {
          ...expense,
          productsList: [...newProductsList],
        };
      }

      if (payload.key === 'cost') {
        let productCost;
        const newProductsList = expense.productsList.map(product => {
          if (product.id === payload.prdID) {
            productCost = Number(product.cost);
            return {
              ...product,
              [payload.key]: payload.value,
            };
          }
          return product;
        });

        let inputValue;
        let sum = productsCost(state, payload.expID);

        if (payload.value === '') {
          inputValue = '0';

          sum = Number(sum) - productCost;
        } else {
          inputValue = payload.value;
          sum = Number(sum) - productCost + Number(inputValue);
        }

        return {
          ...expense,
          productsList: [...newProductsList],
          remainder: Number(expense.budget) - Number(sum),
        };
      }
    }
    return expense;
  });
  return newExpensesList;
};

const deleteHelper = (state, type) => {
  let deletedList;
  if (type === REMOVE_EXP) {
    deletedList = state.list.filter(_ => _.isExpenseSelected === false);
  }
  return deletedList;
};

const productsCost = (state, id) => {
  const expense = state.list.find(i => i.id === id);
  const sum = expense.productsList.reduce(
    (acc, i) => (acc += Number(i.cost)),
    0,
  );
  return sum;
};
