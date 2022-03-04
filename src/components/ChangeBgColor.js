import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBgColor } from '../features/backgroundTheme';

const ChangeBgColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setBackgroundColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeBgColor(backgroundColor));
        }}
      >
        CHANGE BACKGROUND
      </button>
    </div>
  );
};

export default ChangeBgColor;
