import React, { useState } from "react";

const CarSelection = () => {
  const carList = ["BMW", "Mercedes", "Audi", "RollRoy"];
  const colorList = ["Black", "White", "Red", "Pink"];
  const [selectedCar, setSelectedCar] = useState(carList[0]);
  const [selectedColor, setSelectedColor] = useState(colorList[0]);

  const handleCarChange = (e) => {
    setSelectedCar(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div id="app-car">
      <h1>Select your car</h1>
      <label>
        Select a car:
        <select value={selectedCar} onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select a color:
        <select value={selectedColor} onChange={handleColorChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <br />
      <div>
        You selected a {selectedColor} - {selectedCar}
      </div>
    </div>
  );
};

export default CarSelection;
