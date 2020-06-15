/* Libraries */
import {u4 as uuidv4} from 'uuid';

const expenses = [
  {
    id: uuidv4(),
    title: 'Weakly',
    budget: '100',
    remainder: 90,
    productsList: [
      {id: uuidv4(), name: 'Gums', cost: '2'},
      {id: uuidv4(), name: 'Coffee', cost: '2'},
      {id: uuidv4(), name: 'Launch', cost: '6'},
    ],
  },
  {
    id: uuidv4(),
    title: 'Weakly',
    budget: '50',
    remainder: 41,
    productsList: [
      {id: uuidv4(), name: 'Gums', cost: '1'},
      {id: uuidv4(), name: 'Coffee', cost: '2'},
      {id: uuidv4(), name: 'Launch', cost: '6'},
    ],
  },
];

console.log(expenses);
