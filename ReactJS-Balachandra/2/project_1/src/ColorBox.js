import React from 'react';

const ColorBox = ({ inputColor, hexCode, isDarkText }) => {
  return (
    <section
      className='box'
      style={{
        backgroundColor: inputColor,
        color: isDarkText ? '#000' : '#FFF',
      }}
    >
      <p>{inputColor ? inputColor : 'Empty Value'}</p>
      <p>{hexCode ? hexCode : null}</p>
    </section>
  );
};

ColorBox.defaultProps = {
  inputColor: 'Empty Color Value',
};

export default ColorBox;
