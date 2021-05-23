import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  //
  const dispatch = useDispatch();
  // connect
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);
  console.log(toggle);

  const incrementHandler = () => {
    dispatch({ type: 'increment', amount: 1 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement', amount: 1 });
  };

  const incrementHandlerby5 = () => {
    dispatch({ type: 'increment', amount: 5 });
  };

  const decrementHandlerby5 = () => {
    dispatch({ type: 'decrement', amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button onClick={toggleCounterHandler}>
        {toggle ? 'Hide' : 'Show'} Counter
      </button>
      {toggle && (
        <div>
          <div className={classes.value}> {counter} </div>
          <button onClick={incrementHandler}>Increment </button>
          <button onClick={incrementHandlerby5}>Increment 5</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={decrementHandlerby5}>Decrement 5</button>
        </div>
      )}
    </main>
  );
};

export default Counter;
