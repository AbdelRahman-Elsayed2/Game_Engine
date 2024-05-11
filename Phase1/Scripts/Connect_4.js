import GameEngine from "./GameEngine.js"
export default class Connect4 extends GameEngine{
    constructor(width,heigth,turn){
        super(width,heigth);
        this.turn=turn;
    }
    Controller(){
        let element = document.querySelector('input').value;
        document.querySelector('input').value="";
        //let a = document.getElementById(element).style.backgroundColor="red";
    
        for(let i=1 ; i<=6 ; i++){
            let id = i.toString().concat(element);
            if(document.getElementById(id).style.backgroundColor!="red" && document.getElementById(id).style.backgroundColor!="blue"){
                this.Draw(document.getElementById(id),this.turn,2);
                if(this.turn=="blue"){
                    this.turn="red";
                }
                else{
                    this.turn="blue";
                }
                break;
            }
        }
    }
   
    
}
const Connect4Game = new Connect4(7,6,"blue");
document.getElementById ("moveConnect4").addEventListener ("click", ()=>Connect4Game.Controller(), false);
