import React from 'react';
import colorNames from 'colornames';

const ColorInput = ({
  inputColor,
  setInputColor,
  hexCode,
  setHexCode,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        placeholder='Add Color Name'
        required
        type='text'
        value={inputColor}
        onChange={(e) => {
          setInputColor(e.target.value);
          setHexCode(colorNames(e.target.value));
        }}
      />
      <button type='button' onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default ColorInput;
