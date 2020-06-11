/* Libraries */
import {v4 as uuidv4} from 'uuid';

/*  Types */
export const CREATE_PRD = 'CREATE_PRODUCT';
export const REMOVE_PRD = 'REMOVE_PRODUCT';
export const UPDATE_PRD = 'UPDATE_PRODUCT';

const initialState = {
  productsList: [
    {id: '5684-6222-1684', name: 'Coffee', cost: 1.4},
    {id: '5684-6282-1684', name: 'Coffee', cost: 1.4},
    {id: '5684-6212-1684', name: 'Coffee', cost: 1.4},
  ],
};

/*  Reducers */
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRD:
      return {
        productsList: [
          ...state.expensesList,
          {
            id: uuidv4(),
            productsList: [],
          },
        ],
      };
    case REMOVE_PRD:
      return {
        ...state,
        expensesList: state.expensesList.filter(
          i => i.expensesID !== action.payload,
        ),
      };
    case UPDATE_PRD:
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
export const createProduct = () => ({
  type: CREATE_PRD,
});

export const removeProduct = id => ({
  type: REMOVE_PRD,
  payload: id,
});

export const updateProduct = ({prop, value}) => ({
  type: UPDATE_PRD,
  payload: {
    prop,
    value,
  },
});
