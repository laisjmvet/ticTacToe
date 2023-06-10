//import prompt from "prompt-sync";
const prompt = require('prompt-sync')({sigint: true})

const matrixNums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let possibleIdx = [[],[],[]];
let gameOver = false;

const updatePrintCheck = () => {
    updateMatrixNums(); 
    printMatrix();
    checkWinner(board);
}

let gameDraw = () => {
    const spotAvailable = matrixNums.some(elem => typeof elem === "number");

    if(!spotAvailable) {
        console.log("It is a draw!!");
        gameOver = true;

    }
};

const printMatrix = () => {    
    let a=matrixNums[0];
    let b=matrixNums[1];
    let c=matrixNums[2];
    let d=matrixNums[3];
    let e=matrixNums[4];
    let f=matrixNums[5];
    let g=matrixNums[6];
    let h=matrixNums[7];
    let i=matrixNums[8];
    
    return console.log(`${a}|${b}|${c}\n-----\n${d}|${e}|${f}\n-----\n${g}|${h}|${i}\n`);
}

const possibleChoices = () => {

    const board2 = [...board];

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){

            if(board[i][j] === 0){        
                board2[i][j] = -1;

                if(checkWinner(board2) === "computerWins"){
                    board[i][j] = -1;

                    return true;
                }
                board2[i][j] = 0;
                possibleIdx[i].push(j);
            }        
        }
    }
    return false;
}

const computerRandomArr = () => {
    const randomArr = Math.floor(Math.random() * possibleIdx.length);    
    
    return possibleIdx.indexOf(possibleIdx[randomArr]);   
      
}

const computerRandomArrElem = (computerRandomArr) => {    
    const randomElemArr = Math.floor(Math.random() * possibleIdx[computerRandomArr].length);
    
    return possibleIdx[computerRandomArr][randomElemArr];

}    

const checkWinner = (board) => {
    if(board[0][0] + board[0][1] + board[0][2] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[1][0] + board[1][1] + board[1][2] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[2][0] + board[2][1] + board[2][2] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[0][0] + board[1][0] + board[2][0] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[0][1] + board[1][1] + board[2][1] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[0][2] + board[1][2] + board[2][2] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[0][0] + board[1][1] + board[2][2] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    }else if(board[0][2] + board[1][1] + board[2][0] == 3){
        console.log("YOU WIN!");
        gameOver = true;
        return "playerWins";

    } else if(board[0][0] + board[0][1] + board[0][2] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";

    }else if(board[1][0] + board[1][1] + board[1][2] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";

    }else if(board[2][0] + board[2][1] + board[2][2] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";

    }else if(board[0][0] + board[1][0] + board[2][0] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";

    }else if(board[0][1] + board[1][1] + board[2][1] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";

    }else if(board[0][2] + board[1][2] + board[2][2] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";        

    }else if(board[0][1] + board[1][1] + board[2][2] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";

    }else if(board[0][2] + board[1][1] + board[2][0] == -3){
        console.log("LOSER!");
        gameOver = true;
        return "computerWins";
    }    
    
    gameDraw();
}

const updateMatrixNums = () => {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++) {    
                    
            if(board[i][j] === 1) {                

                if(i === 0){
                    matrixNums[j] = "X";

                }else if(i === 1){
                    matrixNums[j + 3] = "X";

                }else {
                    matrixNums[j + 6] = "X";
                }
                
            }else if(board[i][j] === -1){

                if(i === 0){
                    matrixNums[j] = "O";

                }else if(i === 1){
                    matrixNums[j + 3] = "O";

                }else {
                    matrixNums[j + 6] = "O";
                }
            }
        }
    }
}

const computerTurn = () => {    

    if(gameOver) {
        return;
    }

    console.log("COMPUTER TURN!\n");
    
    // Try win the game
    if(possibleChoices()) {
         updatePrintCheck();
         return;
    }

    // Try not lose the game
    if(board[0][0] + board[0][1] + board[0][2] == -2 || board[0][0] + board[0][1] + board[0][2] == 2){
        board[0][board[0].indexOf(0)] = -1;

            updatePrintCheck();

    }else if(board[1][0] + board[1][1] + board[1][2] == -2 || board[1][0] + board[1][1] + board[1][2] == 2){
        board[1][board[1].indexOf(0)] = -1;

            updatePrintCheck();

    }else if(board[2][0] + board[2][1] + board[2][2] == -2 || board[2][0] + board[2][1] + board[2][2] == 2){
        board[2][board[2].indexOf(0)] = -1;

            updatePrintCheck();


    }else if(board[0][0] + board[1][0] + board[2][0] == -2 || board[0][0] + board[1][0] + board[2][0] == 2){

        if(board[0][0] == 0){
            board[0][0] = -1;

            updatePrintCheck();

        }else if(board[1][0] == 0){
            board[1][0] = -1;

            updatePrintCheck();

        }else if (board[2][0] == 0){
            board[2][0] = -1;

            updatePrintCheck();

        }

    }else if(board[0][1] + board[1][1] + board[2][1] == -2 || board[0][1] + board[1][1] + board[2][1] == 2){

        if(board[0][1] == 0){
            board[0][1] = -1;

            updatePrintCheck();

        }else if(board[1][1] == 0){
            board[1][1] = -1;

            updatePrintCheck();

        }else if (board[2][1] == 0){
            board[2][1] = -1;

            updatePrintCheck();

        }

    }else if(board[0][2] + board[1][2] + board[2][2] == -2 || board[0][2] + board[1][2] + board[2][2] == 2){

        if(board[0][2] == 0){
            board[0][2] = -1;

            updatePrintCheck();

        }else if(board[1][2] == 0){
            board[1][2] = -1;

            updatePrintCheck();

        }else if (board[0][0] == 0){
            board[2][2] = -1;

            updatePrintCheck();

        }

    }else if(board[0][2] + board[1][1] + board[2][0] == -2 || board[0][2] + board[1][1] + board[2][0] == 2){

        if(board[0][2] == 0){
            board[0][2] = -1;

            updatePrintCheck();

        }else if(board[1][1] == 0){
            board[1][1] = -1;

            updatePrintCheck();

        }else if (board[2][0] == 0){
            board[2][0] = -1;

            updatePrintCheck();

        }

    }else if(board[0][0] + board[1][1] + board[2][2] == -2 || board[0][0] + board[1][1] + board[2][2] == 2){

        if(board[0][0] == 0){
            board[0][0] = -1;

            updatePrintCheck();

        }else if(board[1][1] == 0){
            board[1][1] = -1;

            updatePrintCheck();

        }else if (board[2][2] == 0){
            board[2][2] = -1;

            updatePrintCheck();

        }
    } else {
        possibleChoices();

        const arr = computerRandomArr();
        const elem = computerRandomArrElem(arr); 

        board[arr][elem] = -1;
        updatePrintCheck();
    }    
}

const playerTurn = () => {

    let regex = /[0-8]/
    let input = prompt(`Your turn! Choose a number or CTRL + C to quit: `);          

    if(!regex.test(input.trim())) {
        console.log(`Type a valid number`);
        playerTurn();

    }else if(matrixNums[input] === "X" || matrixNums[input] === "O") {
        console.log("This spot is already filled, choose another one!");
        playerTurn();
        

    }else {

        switch(Number(input)) {
            case 0: 
                board[0][0] = 1;
                updatePrintCheck();
                break;
            case 1: 
                board[0][1] = 1;
                updatePrintCheck();
                break;
            case 2: 
                board[0][2] = 1;
                updatePrintCheck();
                break;
            case 3: 
                board[1][0] = 1;
                updatePrintCheck();
                break;
            case 4: 
                board[1][1] = 1;
                updatePrintCheck();
                break;
            case 5: 
                board[1][2] = 1;
                updatePrintCheck();
                break;
            case 6: 
                board[2][0] = 1;
                updatePrintCheck();
                break;
            case 7: 
                board[2][1] = 1;
                updatePrintCheck();
                break;
            case 8: 
                board[2][2] = 1;
                updatePrintCheck();
                break;
        }        

    }
}

const playGame = () => { 
    printMatrix(); 
    while(!gameOver){         
        
        playerTurn();        
        computerTurn();             
            
    }
}
playGame();



