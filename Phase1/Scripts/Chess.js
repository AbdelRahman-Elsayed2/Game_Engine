import GameEngine from "./GameEngine.js"
export default  class Chess extends GameEngine{
    constructor(width,heigth,turn){
        super(width,heigth);
        this.turn=turn;
    }
    Controller(){
        let element = document.querySelector('input').value;
        document.querySelector('input').value="";
        let From=element.substr(0,2);
        let To=element.substr(2,3);

        let elementFrom = document.getElementById(From);
        let elementTo = document.getElementById(To);
        if(this.turn=="black"){
            if(elementFrom.innerHTML=='♟'){
                if(From[0]-To[0]==1 && From[1]==To[1] && elementTo.innerHTML==''){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                    this.Draw(elementFrom , "",0);
                    this.turn="white";
                }
                else if(From[0]-To[0]==1 && (From[1].charCodeAt(0)-To[1].charCodeAt(0)==1 || From[1].charCodeAt(0)-To[1].charCodeAt(0)==-1) && this.check_white(elementTo.innerHTML)){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                    this.Draw(elementFrom , "",0);
                    this.turn="white";
                }
            }
            else if(elementFrom.innerHTML=='♜'){
                let arr=['a','b','c','d','e','f','g'];
                
                if(From[0]==To[0] && To[1].charCodeAt(0)>From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)+1 ; i<To[1].charCodeAt(0) ; i++){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[0]==To[0] && To[1].charCodeAt(0)<From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)-1 ; i>To[1].charCodeAt(0) ; i--){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[1]==To[1] && From[0]<To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[1]==To[1] && From[0]>To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
            }
            else if(elementFrom.innerHTML=='♞'){
                if(Math.abs(From[0]-To[0])==1 && Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0))==2 && (this.check_white(elementTo.innerHTML) || elementTo.innerHTML=='')){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                    this.turn="white";
                }
                else if(Math.abs(From[0]-To[0])==2 && Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0))==1 && (this.check_white(elementTo.innerHTML) || elementTo.innerHTML=='')){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                    this.turn="white";
                }
            }
            else if(elementFrom.innerHTML=='♝'){
                let arr=['a','b','c','d','e','f','g'];
                if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        console.log("okk");
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
            }
            else if(elementFrom.innerHTML=='♛'){
                let arr=['a','b','c','d','e','f','g'];
                if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        console.log("okk");
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[0]==To[0] && To[1].charCodeAt(0)>From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)+1 ; i<To[1].charCodeAt(0) ; i++){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[0]==To[0] && To[1].charCodeAt(0)<From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)-1 ; i>To[1].charCodeAt(0) ; i--){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[1]==To[1] && From[0]<To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
                else if(From[1]==To[1] && From[0]>To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
            }
            else if(elementFrom.innerHTML=='♚'){
                if(Math.abs(From[0]-To[0])<=1 && Math.abs(From[1].codePointAt(0)-To[1].charCodeAt(0))<=1){
                    if(elementTo.innerHTML=='' || this.check_white(elementTo.innerHTML)){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="white";
                    }
                }
            }
            
        }   

        else if(this.turn=="white"){
            if(elementFrom.innerHTML=='♙'){
                if(From[0]-To[0]==-1 && From[1]==To[1] && elementTo.innerHTML==''){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                    this.turn="black";
                }
                else if(From[0]-To[0]==-1 && (From[1].charCodeAt(0)-To[1].charCodeAt(0)==1 || From[1].charCodeAt(0)-To[1].charCodeAt(0)==-1) && this.check_black(elementTo.innerHTML)){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                    this.turn="black";
                }
            }
            else if(elementFrom.innerHTML=='♖'){
                let arr=['a','b','c','d','e','f','g'];
                
                if(From[0]==To[0] && To[1].charCodeAt(0)>From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)+1 ; i<To[1].charCodeAt(0) ; i++){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[0]==To[0] && To[1].charCodeAt(0)<From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)-1 ; i>To[1].charCodeAt(0) ; i--){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[1]==To[1] && From[0]<To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[1]==To[1] && From[0]>To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
            }
            else if(elementFrom.innerHTML=='♘'){
                if(Math.abs(From[0]-To[0])==1 && Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0))==2 && (this.check_black(elementTo.innerHTML) || elementTo.innerHTML=='')){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                    this.turn="black";
                }
                else if(Math.abs(From[0]-To[0])==2 && Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0))==1 && (this.check_black(elementTo.innerHTML) || elementTo.innerHTML=='')){
                    this.Draw(elementTo , elementFrom.innerHTML,0 );
                    this.Draw(elementFrom , "",0);
                    this.turn="black";
                }
            }
            else if(elementFrom.innerHTML=='♗'){
                let arr=['a','b','c','d','e','f','g'];
                if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        console.log("okk");
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
            }
            else if(elementFrom.innerHTML=='♕'){
                let arr=['a','b','c','d','e','f','g'];
                if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        console.log("okk");
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]<From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]>From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-96;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j++;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(Math.abs(From[0]-To[0])==Math.abs(From[1].charCodeAt(0)-To[1].charCodeAt(0)) && To[0]>From[0] && To[1]<From[1]){
                    console.log("ok");
                    let j=From[1].charCodeAt(0)-98;
                    let temp = true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(arr[j]);
                        if(document.getElementById(id).innerHTML!=''){
                            temp = false;
                        }
                        j--;
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[0]==To[0] && To[1].charCodeAt(0)>From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)+1 ; i<To[1].charCodeAt(0) ; i++){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[0]==To[0] && To[1].charCodeAt(0)<From[1].charCodeAt(0)){
                    let temp=true;
                    for(let i=From[1].charCodeAt(0)-1 ; i>To[1].charCodeAt(0) ; i--){
                        let char=i-97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[1]==To[1] && From[0]<To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])+1 ; i<parseInt(To[0]) ; i++){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
                else if(From[1]==To[1] && From[0]>To[0]){
                    let temp=true;
                    for(let i=parseInt(From[0])-1 ; i>parseInt(To[0]) ; i--){
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if(document.getElementById(id).innerHTML!=''){
                            temp=false;
                        }
                    }
                    if(temp && (elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML))){
                        this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
            }
            else if(elementFrom.innerHTML=='♔'){
                if(Math.abs(From[0]-To[0])<=1 && Math.abs(From[1].codePointAt(0)-To[1].charCodeAt(0))<=1){
                    if(elementTo.innerHTML=='' || this.check_black(elementTo.innerHTML)){
                       this.Draw(elementTo , elementFrom.innerHTML,0 );
                        this.Draw(elementFrom , "",0);
                        this.turn="black";
                    }
                }
            }
            
        }
    }
    check_black(index){
        if(index=='♜' ||index=='♞'||index=='♝'||index=='♛'||index=='♚'||index=='♟'){
            return true;
        }
    }
    check_white(index){
        if(index=='♙' ||index=='♖'||index=='♘'||index=='♗'||index=='♕'||index=='♔'){
            return true;
        }
    }
  

}
const ChessGame = new Chess(8,8,"black") ;

document.getElementById ("moveChess").addEventListener ("click", ()=> ChessGame.Controller(), false);
