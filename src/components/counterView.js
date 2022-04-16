import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counterview = () => {
  const getCount = useSelector((state) => state.counter);
  console.log(getCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>MY count : {getCount.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
    </>
  );
};

export default Counterview;
