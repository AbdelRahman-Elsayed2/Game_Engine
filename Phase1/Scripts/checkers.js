 import GameEngine from "./GameEngine.js"
export default  class checker extends GameEngine{
    constructor(width,heigth,p1,p2,turn){
        super(width,heigth,p1,p2,turn);
        document.getElementById("pr").style.display='block';
        document.getElementById("pl").style.display='none';
    }
    Controller(){
        document.getElementById ("error").style.display='none';
        let element = this.TakeInput_ChangeTurn();
        let From=element.substr(0,2);
        let To=element.substr(2,3);
        let elementFrom = document.getElementById(From);
        let elementTo = document.getElementById(To);
        let s1="A";
        let s2="A";
        if(elementFrom.innerHTML!="")
         s1 = elementFrom.innerHTML[25];
        if(elementTo.innerHTML!="")
         s2 = elementTo.innerHTML[25];
        let valid = false;
        //elementFrom.innerHTML ="";
        //console.log(elementFrom);
        if(this.turn=="black"){
           let r1 = parseInt(From[0]);
           let c1 = parseInt(From[1]);
           let r2 = parseInt(To[0]);
           let c2 = parseInt(To[1]);
           //console.log("r1 "+r1+"c1 "+c1);
           //console.log("r2 "+r2+"c2 "+c2);
           if(r2 == (r1)+1 && c2 == (c1)+1){
             if( s2 == "t"){
                let row = r2+1;
                let col = c2+1;
                let to = row.toString()+col.toString();
                console.log(to)
                if(document.getElementById(to).innerHTML==""){
                    valid = true;
                    elementTo.innerHTML="";
                    this.Draw(document.getElementById(to),elementFrom.innerHTML,0);
                    this.Draw(elementFrom,"",0);
                    this.changecolor();

                }
             }else if( s2 == "A"){console.log("s2"+s2);
                valid = true;
                this.Draw(elementTo,elementFrom.innerHTML,0);
                this.Draw(elementFrom,"",0);
                this.changecolor();
             }
           }else if(r2 == (r1)+1 && c2 == (c1)-1){
            if( s2 == "t"){
                let row = r2+1;
                let col = c2-1;
                let to = row.toString()+col.toString();
                //console.log(to)
                if(document.getElementById(to).innerHTML==""){
                    valid = true;
                    elementTo.innerHTML="";
                    this.Draw(document.getElementById(to),elementFrom.innerHTML,0);
                    this.Draw(elementFrom,"",0);
                    this.changecolor();

                }
             }else if( s2 == "A"){//console.log("s2"+s2);
                valid = true;
                this.Draw(elementTo,elementFrom.innerHTML,0);
                this.Draw(elementFrom,"",0);
                 this.changecolor();
             }
           }

        }
        if(this.turn=="red"){
            let r1 = parseInt(From[0]);
            let c1 = parseInt(From[1]);
            let r2 = parseInt(To[0]);
            let c2 = parseInt(To[1]);
            //console.log("r1 "+r1+"c1 "+c1);
            //console.log("r2 "+r2+"c2 "+c2);
            if(r2 == (r1)-1 && c2 == (c1)+1){
              if( s2 == "\""){
                 let row = r2-1;
                 let col = c2+1;
                 let to = row.toString()+col.toString();
                 console.log("t "+to)
                 if(document.getElementById(to).innerHTML==""){
                     valid = true;
                     elementTo.innerHTML="";
                     this.Draw(document.getElementById(to),elementFrom.innerHTML,0);
                     this.Draw(elementFrom,"",0);
                     this.changecolor();
 
                 }
              }else if( s2 == "A"){//console.log("s2"+s2);
                 valid = true;
                 this.Draw(elementTo,elementFrom.innerHTML,0);
                 this.Draw(elementFrom,"",0);
                 this.changecolor();
              }
            }else if(r2 == (r1)-1 && c2 == (c1)-1){
             if( s2 == "\""){
                 let row = r2-1;
                 let col = c2-1;
                 let to = row.toString()+col.toString();
                 console.log(to)
                 if(document.getElementById(to).innerHTML==""){
                     valid = true;
                     elementTo.innerHTML="";
                    this.Draw(document.getElementById(to),elementFrom.innerHTML,0);
                 this.Draw(elementFrom,"",0);
                    this.changecolor();
 
                 }
              }else if( s2 == "A"){console.log("s2"+s2);
                 valid = true;
                 this.Draw(elementTo,elementFrom.innerHTML,0);
                 this.Draw(elementFrom,"",0);
                 this.changecolor();
                 
              }
            }
 
         }
         if(!valid){
            document.getElementById ("error").style.display='block';
            document.getElementById('Getplay').value="";
         }
    }
    //Draw(element)
    changecolor(){
      if(this.turn == "black") {
         document.getElementById("pr").style.display='block';
         document.getElementById("pl").style.display='none';
         }
     else if(this.turn == "red"){ 
         
         document.getElementById("pr").style.display='none';
         document.getElementById("pl").style.display='block';
         }  
    }

}
const CheckerGame = new checker(8,8,"red","black","red") ;
document.getElementById ("moveChess").addEventListener ("click", ()=>CheckerGame.Controller(), false);

