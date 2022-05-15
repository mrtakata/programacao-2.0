import React, { Component } from 'react';
import './App.css';
import { PlayerManager } from './PlayerManager';

class App extends Component {

  private playerManager: PlayerManager = new PlayerManager();
  constructor(props) {
    super(props);
    this.playerManager?.setPlayer("RandomAI", 0);
    this.playerManager?.setPlayer("RandomAI", 1);
    console.log(this.playerManager?.getPlayerList());
  }

  showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }

  render = () => {

    return (<div>
      <input type="file" onChange={(e) => this.showFile(e)} />
    </div>
    )
  }
}

export default App;
