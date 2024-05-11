import GameEngine from "./GameEngine.js"
let grid;
export default class Sudoku extends GameEngine{
    constructor(width,heigth,turn){
        super(width,heigth);
        this.turn=turn;
        const getColumn = (colNumber, lines) =>
{
    const col = [];
    for (let i = 0; i < lines.length; ++i)
    {
        const line = lines[i];
        col.push(line[colNumber]);
    }
    return col;
};

const getAllowed = (column, picks) =>
{
    const choosable = [];
    for (let i = 0; i < picks.length; ++i)
    {
        const pick = picks[i];
        if (!column.includes(pick))
        {
            choosable.push(pick);
        }
    }
    return choosable;
};

function getSquare(colNumber, lineNumber, lines)
{
    const detected = [];
    if (!lineNumber)
    {
        return detected;
    }

    let startCol = Math.floor(colNumber / 3) * 3;
    let endCol = startCol + 3;

    let startLine = Math.floor(lineNumber / 3) * 3;
    let endLine = Math.min(startLine + 3, lines.length);

    for (let i = startCol; i < endCol; ++i)
    {
        for (let j = startLine; j < endLine; ++j)
        {
            const item = lines[j][i];
            if (item !== undefined)
            {
                detected.push(item);
            }
        }
    }

    return detected;
}

const generateRandomLine = (lines) =>
{
    const line = [];
    let selectables = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; ++i)
    {
        const column = getColumn(i, lines);

        let allowed;

        // Remove column items
        allowed = getAllowed(column, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

        // Remove line items
        allowed = getAllowed(line, allowed);

        // remove square items
        const square = getSquare(i, lines.length, lines);
        allowed = getAllowed(square, allowed);

        const random = allowed.length > 1 ? Math.floor(Math.random() * allowed.length) : 0;

        const chosen = allowed[random];
        if (chosen === undefined)
        {
            return false;
        }
        line.push(chosen);

        selectables.splice(selectables.indexOf(chosen), 1);
    }

    return line;
};

const generateGrid = () =>
{
    let iterations;
    do
    {
        const grid = [];
        iterations = 0;
        do
        {
            ++iterations;
            if (iterations > 500)
            {
                iterations = -1;
                // Invalid
                break;
            }

            const line = generateRandomLine(grid);
            if (!line)
            {
                continue;
            }
            grid.push(line);


        } while (grid.length < 9);

        if (iterations !== -1)
        {
            return grid;
        }

    } while (true);

};

const displayGrid = () =>
{
     grid = generateGrid();
    
    for(let i=1;i<=9;i++){
        let num= Math.floor(Math.random() * 9)+1;
        console.log("num = "+num);
        for(let j=1;j<=num;j++){
            let num2= Math.floor(Math.random() * 9)+1;
        console.log("num2 = "+num2);
            document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i-1].getElementsByTagName('td')[num2-1].getElementsByTagName('input')[0].value=grid[i-1][num2-1];

        }
    }
    
};

displayGrid();

    }
    Controller(){
        document.getElementById ("error").style.display='none';
        let element = document.getElementById('Getplay').value;
        document.getElementById('Getplay').value="";
        let row=element.substr(0,1);
        let col=element.substr(1,1);
        let value=element.substr(2,3);
       let b1=true;
       for(let i=0;i<9;i++){
       let v =  document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[row-1].getElementsByTagName('td')[i].getElementsByTagName('input')[0].value;
        if(v == value) b1 = false;
       }
       for(let i=0;i<9;i++){
         let v =  document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[col-1].getElementsByTagName('input')[0].value;
         if(v == value) b1 = false;
        }
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
               let  v =  document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[col-1].getElementsByTagName('input')[0].value;                
                if(v == value) b1=false;
            }
        }
        if(b1) {
            
           let elem =  document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[row-1].getElementsByTagName('td')[col-1].getElementsByTagName('input')[0];
           this.Draw(elem,value , 1);
        }else{
                document.getElementById ("error").style.display='block';
                this.Draw(document.getElementById('Getplay') , "" , 1);
            
        }
            
        
    }
}
// function display_sudoku(){console.log("55");
//  document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[2].getElementsByTagName('input')[0].value='5';
//    let b = document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[2].getElementsByTagName('input')[0];
//    console.log(b);
// }
const sudokuGame = new Sudoku(3,3,0);
document.getElementById ("EnterPlay").addEventListener ("click", ()=>sudokuGame.Controller(), false);
//document.getElementsByClassName('sudoku')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[2].getElementsByTagName('input')[0].value='5';
