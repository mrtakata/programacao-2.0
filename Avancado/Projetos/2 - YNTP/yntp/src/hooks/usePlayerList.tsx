import { v4 as uuid } from 'uuid'
import { aiList } from '../PresetAI/AIList'

const usePlayerList = () => {
  const playerList = aiList;
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