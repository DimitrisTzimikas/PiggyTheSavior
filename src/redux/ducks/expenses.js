/*  Types */
export const CREATE_EXP = 'CREATE_EXPENSE';
export const REMOVE_EXP = 'REMOVE_EXPENSE';
export const UPDATE_EXP = 'UPDATE_EXPENSE';
export const CREATE_PRD = 'CREATE_PRODUCT';
export const REMOVE_PRD = 'REMOVE_PRODUCT';

const initialState = {
  list: [],
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
            productsList: [],
          },
        ],
      };
    case UPDATE_EXP:
      return {...state, list: [...updateHelper(state, payload)]};
    case REMOVE_EXP:
      return {...state, list: deleteHelper(state, payload)};
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

export const removeExpense = id => ({
  type: REMOVE_EXP,
  payload: id,
});

/* Helpers */
const createProductHelper = (state, payload) => {
  const newExpensesList = state.list.map(expense => {
    if (expense.id === payload.expID) {
      return {
        ...expense,
        productsList: [...expense.productsList, {id: payload.prdID}],
      };
    }
    return expense;
  });

  return newExpensesList;
};

const deleteProductHelper = (state, payload) => {
  const deletedList = state.list.map(expense => {
    if (expense.id === payload.expID) {
      const newProductsList = expense.productsList.filter(
        product => product.id !== payload.prdID,
      );
      return {
        ...expense,
        productsList: [...newProductsList],
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
          remainder: expense.budget - sum,
        };
      }
    }
    return expense;
  });
  return newExpensesList;
};

const deleteHelper = (state, id) => {
  const deletedList = state.list.filter(item => item.id !== id);
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
