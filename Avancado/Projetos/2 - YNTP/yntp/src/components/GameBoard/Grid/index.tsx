import { BoardState } from "../../../engine/interfaces/BoardState"
import { Place } from "../../../engine/interfaces/Place"
import Cell from "../Cell"
import { RenderGridStyled } from "./styles"

const RenderGrid: React.FC<BoardState> = ({
    board,
    cookiePositions,
    playerPositions
  }: BoardState) => {
    return <RenderGridStyled>
      {
        board?.map((row: Array<number>, rowIndex: number) => {
          return row?.map((cellValue: number, columnIndex: number) => {
            const currentPlace: Place = {
              positionX: rowIndex,
              positionY: columnIndex
            }
            let playerIndex = -1;
            if (playerPositions[0].positionX === currentPlace.positionX
              && playerPositions[0].positionY === currentPlace.positionY
            ) {
              playerIndex = 0;
            }
            if (playerPositions[1].positionX === currentPlace.positionX
              && playerPositions[1].positionY === currentPlace.positionY
            ) {
              playerIndex = 1;
            }
            return (
              <Cell
                cellValue= {cellValue}
                playerIndex= {playerIndex}
                hasCookie= {cookiePositions === currentPlace}
              />
            )
          })
        })
      }
    </RenderGridStyled>
  }
export default RenderGrid;