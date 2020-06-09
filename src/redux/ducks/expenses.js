/* Libraries */
import {v4 as uuidv4} from 'uuid';

/*  Types */
export const CREATE_EXP = 'CREATE_EXP';
export const REMOVE_EXP = 'REMOVE_EXPENSES';
export const UPDATE_EXP = 'UPDATE_EXPENSES';

const initialState = {
  expensesList: [
    {
      id: '5614-6982-1484',
      title: 'Weakly',
      amount: 50,
      remainder: 40,
      productsList: [
        {id: '5684-6222-1684', name: 'Coffee', cost: 1.4},
        {id: '5684-6282-1684', name: 'Coffee', cost: 1.4},
        {id: '5684-6212-1684', name: 'Coffee', cost: 1.4},
      ],
    },
    {
      id: '5614-1982-1684',
      title: 'Weakly expenses of the home and there home',
      amount: 100,
      remainder: 40.925,
      productsList: [
        {id: '5684-6222-1784', name: 'Coffee', cost: 1.4},
        {id: '5684-6282-1284', name: 'Coffee', cost: 1.4},
        {id: '5684-6212-1884', name: 'Coffee', cost: 1.4},
      ],
    },
    {
      id: '5614-6985-1684',
      title: 'Weakly',
      amount: 5,
      remainder: 4,
      productsList: [
        {id: '5684-6222-1084', name: 'Coffee', cost: 1.4},
        {id: '5684-6282-1984', name: 'Coffee', cost: 1.4},
        {id: '5684-621Z-1284', name: 'Coffee', cost: 1.4},
      ],
    },
  ],
};

/*  Reducers */
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXP:
      return {
        expensesList: [
          ...state.expensesList,
          {
            id: uuidv4(),
            productsList: [],
          },
        ],
      };
    case REMOVE_EXP:
      return {
        ...state,
        expensesList: state.expensesList.filter(
          i => i.expensesID !== action.payload,
        ),
      };
    case UPDATE_EXP:
      return {
        ...state,
        expensesList: [
          ...state.expensesList,
          {[action.payload.prop]: action.payload.value},
        ],
      };
    default:
      return state;
  }
};

/*  Actions */
export const createExpense = () => ({
  type: CREATE_EXP,
});

export const removeExpense = id => ({
  type: REMOVE_EXP,
  payload: id,
});

export const updateExpense = ({prop, value}) => ({
  type: UPDATE_EXP,
  payload: {
    prop,
    value,
  },
});
