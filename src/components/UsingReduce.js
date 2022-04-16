import React, { useReducer } from 'react';

export const UsingReduce = () => {
  function textupdate(state = 0, action) {
    switch (action.type) {
      case 'addtext':
        return action.payload;
      default:
        return state;
    }
  }

  const [text, dispatch] = useReducer(textupdate, 'mytext');

  return (
    <>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder={text}
        onChange={(event) =>
          dispatch({ type: 'addtext', payload: event.target.value })
        }
      />
    </>
  );
};
