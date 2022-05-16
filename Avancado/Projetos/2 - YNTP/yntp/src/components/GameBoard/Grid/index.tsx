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
              positionX: columnIndex,
              positionY: rowIndex
            }

            return (
              <Cell
                cellValue= {cellValue}
                havePlayer= {playerPositions.find((playerPosition) => playerPosition === currentPlace)}
                haveCookie= {cookiePositions === currentPlace}
              />
            )
          })
        })
      }
    </RenderGridStyled>
  }
export default RenderGrid;