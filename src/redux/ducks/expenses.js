/* Libraries */
import {v4 as uuidv4} from 'uuid';

/*  Types */
export const CREATE_EXP = 'CREATE_EXPENSES';
export const REMOVE_EXP = 'REMOVE_EXPENSES';
export const UPDATE_EXP = 'UPDATE_EXPENSES';

const initialState = {
  expensesList: [
    {
      id: '5614-6982-1484',
      title: 'Weakly',
      amount: '50',
      remainder: 40,
      productsList: [
        {id: '9684-6222-1684', name: 'Gums', cost: 1.4},
        {id: '5684-6282-1684', name: 'Coffee', cost: 2.4},
        {id: '5684-6212-1684', name: 'Launch', cost: 6.4},
        {id: '9684-11234222-1684', name: 'Gums', cost: 1.4},
        {id: '51234684-6182-1684', name: 'Coffee', cost: 2.4},
        {id: '5684-6252-1684', name: 'Launch', cost: 6.4},
        {id: '9684-61234222-1684', name: 'Gums', cost: 1.4},
        {id: '5684-62823142-1484', name: 'Coffee', cost: 2.4},
        {id: '5684-62521312-7384', name: 'Launch', cost: 6.4},
      ],
    },
  ],
};

/*  Reducers */
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_EXP:
      return {
        expensesList: [
          ...state.expensesList,
          {
            id: uuidv4(),
            ...payload,
          },
        ],
      };
    case UPDATE_EXP:
      return {expensesList: [...updateHelper(state, payload)]};
    case REMOVE_EXP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

/*  Actions */
export const createExpense = expense => ({
  type: CREATE_EXP,
  payload: expense,
});

export const updateExpense = (expense, id) => ({
  type: UPDATE_EXP,
  payload: {expense, id},
});

export const removeExpense = id => ({
  type: REMOVE_EXP,
  payload: id,
});

/* Helpers */
const updateHelper = (state, payload) => {
  const newList = state.expensesList.map(item => {
    if (item.id === payload.id) {
      return {...item, ...payload.expense};
    }
    return item;
  });

  return newList;
};
