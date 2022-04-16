import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Updatetext = () => {
  const texts = useSelector((state) => state.getText);
  const dispatch = useDispatch();

  console.log(useParams().id);

  return (
    <>
      <h1>{texts}</h1>
      <input
        type="text"
        placeholder={texts}
        onChange={(event) =>
          dispatch({ type: 'addtext', payload: event.target.value })
        }
      />
    </>
  );
};
