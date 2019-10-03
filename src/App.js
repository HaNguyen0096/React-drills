import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion'
import './App.css'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>Hello World</h1>
        <HelloWorld />
        <h1>Bomb</h1>
        <Bomb />
        <h1>Roulette Gun</h1>
        <RouletteGun bulletInChamber={6} />
        <h1>Accordion</h1>
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;
