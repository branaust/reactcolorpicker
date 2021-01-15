import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette'
import { generatePalette } from './colorHelpers'
import seedColors from './seedColors'
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h2>Palette List goes here</h2>} />
        <Route exact path="/palette/:id" render={() => <h2>Individual Palette</h2>} />
      </Switch>

      // < div className="App" >
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div >
    );
  }
}


export default App;
