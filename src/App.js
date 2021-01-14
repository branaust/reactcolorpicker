import React, { Component } from 'react'
import Palette from './Palette'
import { generatePalette } from './colorHelpers'
import seedColors from './seedColors'
import './App.css';

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    < div className="App" >

      <Palette {...seedColors[4]} />
    </div >
  );
}

export default App;
