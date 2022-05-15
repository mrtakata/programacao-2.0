import { Component } from 'react';

import Home from './view/Home'
import { PlayerManager } from './PlayerManager';

class App extends Component {
  private playerManager: PlayerManager = new PlayerManager();
  constructor(props) {
    super(props);
    this.playerManager?.setPlayer("RandomAI", 0);
    this.playerManager?.setPlayer("RandomAI", 1);
    console.log(this.playerManager?.getPlayerList());
  }

  render = () => (<Home />)
}

export default App;
