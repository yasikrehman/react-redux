import React, { useRef } from 'react';

export const useRefex = () => {
  const access = useRef();

  return (
    <>
      <input type="text" ref={access} />
    </>
  );
};
