import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const Updatetext = () => {
  const texts = useSelector((state) => state.getText);
  const dispatch = useDispatch();
  let location = useLocation();
  const [lastName, setLastName] = useState('');
  let history = useNavigate();

  function handleClick() {
    console.log('test');
    history('/text/tes');
  }

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

      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />

      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </>
  );
};
