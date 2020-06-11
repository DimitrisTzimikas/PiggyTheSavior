/* Libraries */
import {combineReducers} from 'redux';
/* Local Files */
import expenses from './expenses.js';
import products from './products.js';

/* Reducers */
const reducers = combineReducers({
  expenses,
  products,
});

export {reducers};
