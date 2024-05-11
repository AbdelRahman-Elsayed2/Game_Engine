
import GameEngine from "./GameEngine.js"
export default class Tic_Tac_Toe extends GameEngine{
    constructor(width,heigth,turn){
        super(width,heigth);
        this.turn=turn;
    }
    Controller(){
         document.getElementById ("error").style.display='none';
         let block = document.querySelector('input').value;
         console.log("block = "+block);
         // block = 00
         document.querySelector('input').value="";
        // let From=element.substr(0,2);
        // let To=element.substr(2,3);
        let element = document.getElementById(block);
        if(this.turn==='x' && element.innerHTML==''){
            // element.innerHTML='x';
             this.turn='o';
            this.Draw(element , 'x',0);
        }
        else if(this.turn==='o' && element.innerHTML==''){
            // element.innerHTML='o';
            this.turn='x';
            this.Draw(element , 'o',0);

        }
    }
    
}
const newGame = new Tic_Tac_Toe(3,3,"x");
document.getElementById ("moveChess").addEventListener ("click", ()=>newGame.Controller(), false);
