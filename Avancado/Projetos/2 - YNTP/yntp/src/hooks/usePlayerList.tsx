import { v4 as uuid } from 'uuid'
import { PlayerManager } from '../PlayerManager'

const usePlayerList = () => {
  const playerManager = new PlayerManager();
  
  playerManager?.setPlayer("RandomAI", 0);
  playerManager?.setPlayer("RandomAI", 1);
  
  const playerList = playerManager?.getPlayerList()
  const mappedPlayerList = playerList.map(item => (
    {
      value: `item-${uuid()}`,
      label: item
    }
  ))
  
  return {
      playerList: mappedPlayerList,
  }
}

export default usePlayerList