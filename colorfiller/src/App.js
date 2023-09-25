import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [circles, setCircles] = useState(new Array(100).fill(null));

  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCircleClick = (index) => {
    if (selectedColor !== null) {
      const newCircles = [...circles];
      newCircles[index] = selectedColor;
      setCircles(newCircles);
    }
  };

  return (
    <div className="App">
      <div className="color-picker">
        {colors.map((color) => (
          <div
            key={color}
            className={`color ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <div className="circle-container">
        {circles.map((circleColor, index) => (
          <div
            key={index}
            className="circle"
            style={{
              borderColor: 'black',
              backgroundColor: circleColor ? circleColor : 'transparent',
            }}
            onClick={() => handleCircleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
