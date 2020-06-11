/* Libraries */
import {v4 as uuidv4} from 'uuid';

/*  Types */
export const CREATE_EXP = 'CREATE_EXPENSES';
export const REMOVE_EXP = 'REMOVE_EXPENSES';
export const UPDATE_EXP = 'UPDATE_EXPENSES';

const initialState = {
  expensesList: [
    {
      id: uuidv4(),
      title: 'Weakly',
      amount: '50',
      remainder: 40,
      productsList: [
        {id: uuidv4(), name: 'Gums', cost: '1.4'},
        {id: uuidv4(), name: 'Coffee', cost: '2.4'},
        {id: uuidv4(), name: 'Launch', cost: '6.4'},
        {id: uuidv4(), name: 'Gums', cost: '1.4'},
        {id: uuidv4(), name: 'Coffee', cost: '2.4'},
        {id: uuidv4(), name: 'Launch', cost: '6.4'},
        {id: uuidv4(), name: 'Gums', cost: '1.4'},
        {id: uuidv4(), name: 'Coffee', cost: '2.4'},
        {id: uuidv4(), name: 'Launch', cost: '6.4'},
      ],
    },
    {
      id: uuidv4(),
      title: 'Weakly',
      amount: '50',
      remainder: 40,
      productsList: [
        {id: uuidv4(), name: 'Gums', cost: '1.4'},
        {id: uuidv4(), name: 'Coffee', cost: '2.4'},
        {id: uuidv4(), name: 'Launch', cost: '6.4'},
      ],
    },
  ],
};

/*  Reducers */
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_EXP:
      return {
        ...state,
        expensesList: [
          ...state.expensesList,
          {
            id: uuidv4(),
            ...payload,
          },
        ],
      };
    case UPDATE_EXP:
      return {...state, expensesList: [...updateHelper(state, payload)]};
    case REMOVE_EXP:
      return {...state, expensesList: deleteHelper(state, payload)};
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
  const updatedList = state.expensesList.map(item => {
    if (item.id === payload.id) {
      return {...item, ...payload.expense};
    }
    return item;
  });

  return updatedList;
};

const deleteHelper = (state, id) => {
  const deletedList = state.expensesList.filter(item => item.id !== id);

  return deletedList;
};
