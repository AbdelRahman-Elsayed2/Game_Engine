
export default class GameEngine{
    constructor(width,heigth , p1 , p2 , t){
        this.width=width;
        this.heigth=heigth;
        this.player1 = p1;
        this.palyer2 = p2;
        this.turn = t;
    }
    Draw( block , value , index){
        if(index == 0)
        block.innerHTML=value;
        else if(index == 1 ){
            block.value = value;
        }else if(index == 2){
            block.style.backgroundColor = value;
        }
        
    }
   
    Controller(){
        
    }
    TakeInput_ChangeTurn(){
        if(this.turn == this.palyer1) this.turn = this.palyer2;
        else if(this.turn == this.palyer2) this.turn = this.palyer1;
        let element = document.querySelector('input').value;
        document.querySelector('input').value="";
        return element;
    }
}
