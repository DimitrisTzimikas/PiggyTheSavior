/*  Types */
export const CREATE_EXP = 'CREATE_EXPENSE';
export const REMOVE_EXP = 'REMOVE_EXPENSE';
export const UPDATE_EXP = 'UPDATE_EXPENSE';
export const CREATE_PRD = 'CREATE_PRODUCT';
export const REMOVE_PRD = 'REMOVE_PRODUCT';

const initialState = {
  list: [
    {
      id: 'aswrwetddf',
      title: 'Weakly',
      budget: '100',
      remainder: 90,
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
      productsList: [
        {id: 'asdjuikf', name: 'Gums', cost: '1'},
        {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
        {id: 'asqwerfadf', name: 'Launch', cost: '6'},
      ],
    },
    // {
    //   id: 'adfsgw5t546546sdf',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asdftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd1234f', name: 'Coffee', cost: '2'},
    //     {id: '1asdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a21323452346trdfg421fsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'asdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwerfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'assdfvgrtv43689df',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asdftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd1234f', name: 'Coffee', cost: '2'},
    //     {id: '1asdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a213421sdfg sdfvterdgvfsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'asdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwerfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'asdertyv456465v54tvefdgscsdfgf',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asdftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd1234f', name: 'Coffee', cost: '2'},
    //     {id: '1asdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a21342ertyverty1fsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'asdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwerfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'ajjgfhjtvysdf',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asdftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd1234f', name: 'Coffee', cost: '2'},
    //     {id: '1asdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a21dfgfdffggg3421fsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'asdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwerfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a342rwerrrrsdf',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asdftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd1234f', name: 'Coffee', cost: '2'},
    //     {id: '1asdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a2134erwtcetc4321fsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'asdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwerfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'asdfgcewrtc43df',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asdftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd1234f', name: 'Coffee', cost: '2'},
    //     {id: '1asdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a213421fsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'asdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwerfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'asdfc234r234cr',
    //   title: 'Weakly',
    //   budget: '100',
    //   remainder: 90,
    //   productsList: [
    //     {id: 'asd234cr342crftgb', name: 'Gums', cost: '2'},
    //     {id: 'asd12c234r34f', name: 'Coffee', cost: '2'},
    //     {id: '1a23c4r423rcsdf', name: 'Launch', cost: '6'},
    //   ],
    // },
    // {
    //   id: 'a213421sdfvr43rc34fsdf',
    //   title: 'Weakly',
    //   budget: '50',
    //   remainder: 41,
    //   productsList: [
    //     {id: 'sdfvasdjuikf', name: 'Gums', cost: '1'},
    //     {id: 'aw45tfsdsdfvf', name: 'Coffee', cost: '2'},
    //     {id: 'asqwevfdsrfadf', name: 'Launch', cost: '6'},
    //   ],
    // },
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
