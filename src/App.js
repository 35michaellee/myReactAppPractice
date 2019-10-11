
import React, { Component } from 'react';

import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/index.js';
import RouletteGun from './state-drills/Roulette';
import Bomb from './state-drills/Bomb';
import Tabs from './state/Tabs';
import Accordian from './state-drills/Accordian';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];
const sections=[
  { title: ' section First tab',
    content: 'Whats up this is the first tab' },
  { title: 'section Second tab',
  content: 'Whats up this is the second tab' },
  { title: 'section Third tab',
  content: 'Whats up this is the third tab' },
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <TheDate >hey DATE </TheDate>
        <Counter count={123} />
        <HelloWorld />
        <RouletteGun />
        <Bomb />
        <Tabs tabs={tabsProp}/> 
        <Accordian sections={sections}></Accordian>
      
        
      </div>
    );
  }
}

export default App;
