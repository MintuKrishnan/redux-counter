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
      <div>
        <button onClick={incrementHandler}>Increament </button>
        <button onClick={incrementHandlerby5}>Increament 5</button>
        {toggle && <div className={classes.value}> {counter} </div>}
        <button onClick={decrementHandler}>Decreament</button>
        <button onClick={decrementHandlerby5}>Decreament 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Hide Counter</button>
    </main>
  );
};

export default Counter;
