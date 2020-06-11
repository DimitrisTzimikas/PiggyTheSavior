/* Libraries */
import {combineReducers} from 'redux';
/* Local Files */
import expenses from './expenses.js';

/* Reducers */
const reducers = combineReducers({
  expenses,
});

export {reducers};
