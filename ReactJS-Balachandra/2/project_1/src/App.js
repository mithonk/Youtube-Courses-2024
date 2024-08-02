import { useState } from 'react';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';

function App() {
  const [inputColor, setInputColor] = useState('');
  const [hexCode, setHexCode] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className='App'>
      <ColorBox
        inputColor={inputColor}
        hexCode={hexCode}
        isDarkText={isDarkText}
      />
      <ColorInput
        inputColor={inputColor}
        setInputColor={setInputColor}
        hexCode={hexCode}
        setHexCode={setHexCode}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
