import { Place } from "../interfaces/Place";
import { BoardState } from "../interfaces/BoardState";
import { BoardController } from "./BoardController";

const DEFAULTTURNS = 50;
const DEFAULTSIZE = 10;
const DEFAULTMINTURNSTOCOOKIE = 7;
const DEFAULTMAXTURNSTOCOOKIE = 10;

export class GameManager{
    turns: number
    currentTurn: number
    BoardController: BoardController;
    sizeX: number;
    sizeY: number;
    minTurnToCookie: number;
    maxTurnToCookie: number;
    
    constructor(turns?: number, sizeX?: number, sizeY?: number, minTurnToCookie?: number, maxTurnToCookie?: number){
        this.turns = turns || DEFAULTTURNS; 
        this.sizeX = sizeX || DEFAULTSIZE;
        this.sizeY = sizeY || DEFAULTSIZE;
        this.minTurnToCookie = minTurnToCookie || DEFAULTMINTURNSTOCOOKIE;
        this.maxTurnToCookie = maxTurnToCookie || DEFAULTMAXTURNSTOCOOKIE;

        this.adjustTurnsToCookies();
    }

    public setupGame(): void{
        this.currentTurn = 0;

        this.BoardController = new BoardController(this.sizeX, this.sizeY);
        
        if (this.vaiTerCookie) this.BoardController.generateCookie(); 

    };

    public runTurn(movements: string[]): void{

        this.BoardController.updateBoardState(movements);
        this.currentTurn++;

        if (this.vaiTerCookie) this.BoardController.generateCookie(); 

    }

    private vaiTerCookie(): boolean{

        const drawTurn: number = Math.floor(Math.random() * (this.maxTurnToCookie - this.minTurnToCookie + 1)) + this.minTurnToCookie;

        if(this.currentTurn % drawTurn) return true;
        else return false;
    }

    private adjustTurnsToCookies(): void{
        if (this.minTurnToCookie > this.maxTurnToCookie){
            let tmp: number = this.minTurnToCookie;
            this.minTurnToCookie = this.maxTurnToCookie;
            this.maxTurnToCookie = tmp; 
        }
    }

    public getBoardState(): BoardState{
        return this.BoardController.getBoardState();
    }

    public endGame(): boolean {
        if (this.currentTurn >= this.turns) return true;
        else return false;
    };
}