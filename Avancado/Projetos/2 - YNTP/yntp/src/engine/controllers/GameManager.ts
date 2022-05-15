import { Place } from "../interfaces/Place";
import { BoardState } from "../interfaces/BoardState";
import { BoardController } from "./BoardController";
import { Board } from "../../components/GameBoard/styles";
import { PlayerManager } from "../../PlayerManager";

const DEFAULTTURNS = 50;
const DEFAULTSIZE = 10;
const DEFAULTMINTURNSTOCOOKIE = 7;
const DEFAULTMAXTURNSTOCOOKIE = 10;

export class GameManager{
    turns: number
    currentTurn: number
    players: Place[]; // TODO remover o players
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
        
        this.players[0] = this.generateRandomPlace(); // TODO: passar pro board controller
        this.players[1] = this.getMirroredPosition(this.players[0]); // TODO: passar pro board controller

       // this.BoardController.generateCookie(); // TODO: passar pro board controller

    };

    public runTurn(movements: string[]): void{

        this.BoardController.updateBoardState(movements);
        this.currentTurn++;

       // if (this.vaiTerCookie) this.BoardController.generateCookie(); // TODO criar o método generateCookie

    }

    private generateRandomPlace(): Place{
               
        const xValue: number = Math.floor(Math.random() * (this.sizeX - 0 + 1)) + 0;
        const yValue: number = Math.floor(Math.random() * (this.sizeY - 0 + 1)) + 0;

        let place: Place;
        place.positionX = xValue;
        place.positionY = yValue;

        return place;

    }

    private getMirroredPosition(place: Place): Place{
        let mirroredPlace: Place;

        mirroredPlace.positionX = this.sizeX - (place.positionX - 1);
        mirroredPlace.positionY = this.sizeY - (place.positionY - 1);

        return mirroredPlace;
    }

    private vaiTerCookie(): boolean{

        const drawTurn: number = Math.floor(Math.random() * (10 - 7 + 1)) + 7;

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

    public endGame(): boolean {
        if (this.currentTurn >= this.turns) return true;
        else return false;
    };



}