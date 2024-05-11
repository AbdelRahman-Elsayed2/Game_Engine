import GameEngine from "./GameEngine.js"
export default  class queens extends GameEngine{
  
    Controller(){
        let valid = true;
        let element = this.TakeInput_ChangeTurn();
        document.getElementById ("error").style.display='none';
        let row=element.substr(0,1);
        let col=element.substr(1,2);
        //console.log("row "+row);
        //console.log("col "+col);
        let row2 = row;
        let col2 = col;
        let r = parseInt(row2);
        let c = parseInt(col2);
        for(let i=0;i<8;i++){
            
            if(r+1 <8){
                r = r+1;
                let ro = r.toString();
                let move = ro.concat(col);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
         r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(r-1 >=0){
                r = r-1;
                let ro = r.toString();
                let move = ro.concat(col);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(c+1 <8){
                c = c+1;
                let co = c.toString();
                let move = row.concat(co);
               // console.log(move);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(c-1 >=0){
                c = c-1;
                let co = c.toString();
                let move = row.concat(co);
                console.log(move);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(c+1 <8 && r+1 <8){
                c = c+1;
                let co = c.toString();
                r = r+1;
                let ro = r.toString();
                let move = ro.concat(co);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(c-1 >=0 && r-1 >=0){
                c = c-1;
                let co = c.toString();
                r = r-1;
                let ro = r.toString();
                let move = ro.concat(co);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(c+1 <8 && r-1 >=0){
                c = c+1;
                let co = c.toString();
                r = r-1;
                let ro = r.toString();
                let move = ro.concat(co);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        for(let i=0;i<8;i++){
            if(c-1 >=0 && r+1 <8){
                c = c-1;
                let co = c.toString();
                r = r+1;
                let ro = r.toString();
                let move = ro.concat(co);
                if(document.getElementById(move).innerHTML=='♛'){
                    valid = false ;
                    break;
                }
            }
        }
        r = parseInt(row2);
        c = parseInt(col2);
        if(valid){
           // console.log("2525");
           let block= row.concat(col);
           let ele = document.getElementById (block);
           this.Draw(ele,'♛',0);
           let quene = "q"+count.toString();
           let ele2 = document.getElementById (quene);
            this.Draw(ele2 , '',0);
        count--;
        }
        else{
            document.getElementById ("error").style.display='block';
        }
    }
}
const queensGame = new queens(8,8,0,0,0) ;
document.getElementById ("movequeen").addEventListener ("click", ()=>queensGame.Controller(), false);
let count = 8;