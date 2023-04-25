const dataFromLocalStorage = JSON.parse(localStorage.getItem('contacts'));

const number = [];

export const numberInitialState = dataFromLocalStorage
  ? dataFromLocalStorage
  : number;

export const filterInitialState = { value: '' };
