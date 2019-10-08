
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/index.js';
import RouletteGun from './state-drills/Roulette';
import Bomb from './state-drills/bomb';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate >hey DATE </TheDate>
        <Counter count={123} />
        <HelloWorld/>

        <RouletteGun/>
        <Bomb/>
      </div>
    );
  }
}

export default App;
