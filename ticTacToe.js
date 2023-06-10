const prompt = require('prompt-sync')({sigint: true})
const colors = require("colors");

//elements that are going to be printed
const matrixElems = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//board to keep track of the win/loss
const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//possibles idx that the computer can choose
let possibleIdx = [[],[],[]];
let gameOver = false;

//to update the matrix elements, print the matrix and check if there is a winner at the same time
const updatePrintCheck = () => {
    updateMatrixElems(); 
    printMatrix();
    checkWinner(board);
}
//check if the game is a draw
let gameDraw = () => {
    const spotAvailable = matrixElems.some(elem => typeof elem === "number");

    if(!spotAvailable) {
        console.log(colors.rainbow("It is a draw!!"));
        gameOver = true;

    }
};
//prints the matrix for the user
const printMatrix = () => {    
    let a=matrixElems[0];
    let b=matrixElems[1];
    let c=matrixElems[2];
    let d=matrixElems[3];
    let e=matrixElems[4];
    let f=matrixElems[5];
    let g=matrixElems[6];
    let h=matrixElems[7];
    let i=matrixElems[8];
    
    return console.log(`${a}|${b}|${c}\n-----\n${d}|${e}|${f}\n-----\n${g}|${h}|${i}\n`);
}
//check what are the possibles idx that the computer can choose and update possibleIdx variable
const possibleChoices = () => {

    const board2 = [...board];
    possibleIdx = [[],[],[]];

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
    console.log(possibleIdx);
    return false;
}
//pick a random array from possibleIdx
const computerRandomArr = () => {
    const randomArr = Math.floor(Math.random() * possibleIdx.length);    
    
    return possibleIdx.indexOf(possibleIdx[randomArr]);   
      
}
//pick a random element from the random array
const computerRandomArrElem = (computerRandomArr) => {    
    const randomElemArr = Math.floor(Math.random() * possibleIdx[computerRandomArr].length);
    
    return possibleIdx[computerRandomArr][randomElemArr];

}    
//checks if there is a winner or a draw
const checkWinner = (board) => {
    if(board[0][0] + board[0][1] + board[0][2] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[1][0] + board[1][1] + board[1][2] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[2][0] + board[2][1] + board[2][2] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[0][0] + board[1][0] + board[2][0] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[0][1] + board[1][1] + board[2][1] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[0][2] + board[1][2] + board[2][2] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[0][0] + board[1][1] + board[2][2] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    }else if(board[0][2] + board[1][1] + board[2][0] == 3){
        console.log(colors.green("YOU WIN!"));
        gameOver = true;
        return "playerWins";

    } else if(board[0][0] + board[0][1] + board[0][2] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";

    }else if(board[1][0] + board[1][1] + board[1][2] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";

    }else if(board[2][0] + board[2][1] + board[2][2] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";

    }else if(board[0][0] + board[1][0] + board[2][0] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";

    }else if(board[0][1] + board[1][1] + board[2][1] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";

    }else if(board[0][2] + board[1][2] + board[2][2] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";        

    }else if(board[0][0] + board[1][1] + board[2][2] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";

    }else if(board[0][2] + board[1][1] + board[2][0] == -3){
        console.log(colors.yellow("LOSER!"));
        gameOver = true;
        return "computerWins";
    }    
    
    gameDraw();
}
//updates matrix elements with X or O
const updateMatrixElems = () => {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++) {    
                    
            if(board[i][j] === 1) {                

                if(i === 0){
                    matrixElems[j] = colors.red("X");

                }else if(i === 1){
                    matrixElems[j + 3] = colors.red("X");

                }else {
                    matrixElems[j + 6] = colors.red("X");
                }
                
            }else if(board[i][j] === -1){

                if(i === 0){
                    matrixElems[j] = colors.blue("O");

                }else if(i === 1){
                    matrixElems[j + 3] = colors.blue("O");

                }else {
                    matrixElems[j + 6] = colors.blue("O");
                }
            }
        }
    }
}
//logic for the computer move and update the board
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
    if(board[0][0] + board[0][1] + board[0][2] == 2){
        board[0][board[0].indexOf(0)] = -1;

            updatePrintCheck();

    }else if(board[1][0] + board[1][1] + board[1][2] == 2){
        board[1][board[1].indexOf(0)] = -1;

            updatePrintCheck();

    }else if(board[2][0] + board[2][1] + board[2][2] == 2){
        board[2][board[2].indexOf(0)] = -1;

            updatePrintCheck();


    }else if(board[0][0] + board[1][0] + board[2][0] == 2){

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

    }else if(board[0][1] + board[1][1] + board[2][1] == 2){

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

    }else if(board[0][2] + board[1][2] + board[2][2] == 2){

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

    }else if(board[0][2] + board[1][1] + board[2][0] == 2){

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

    }else if(board[0][0] + board[1][1] + board[2][2] == 2){

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
    //if it can't win or lose, it will chose a spot randomly    
    } else {
        possibleChoices();

        const arr = computerRandomArr();
        const elem = computerRandomArrElem(arr); 

        board[arr][elem] = -1;
        updatePrintCheck();
    }    
}
//prompt the player for his choice and update the board
const playerTurn = () => {

    let regex = /^[0-8]$/
    let input = prompt(`Your turn! Choose a number or CTRL + C to quit: `);          

    if(!regex.test(input.trim())) {
        console.log(colors.red(`Type a valid number`));
        playerTurn();

    }else if(typeof matrixElems[input] != "number") {
        console.log(colors.red("This spot is already filled, choose another one!"));
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



