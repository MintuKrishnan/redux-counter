import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type == 'increment') {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type == 'decrement') {
    return {
      ...state,
      counter: state.counter - action.amount,
    };
  }
  if (action.type == 'toggle') {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
