import prompt from "prompt";

const inputPlayer = {
    properties: {
        input: {
            description: `It's your turn!`,
            pattern: /^[X]$/i,
            message: `Type a valid number`
        }
    }
}

const printMatrix = () => {

    for(let row of matrix){        
        process.stdout.write(row);
    }    
}

const matrix = ["0", "|", "1", "|", "2", "\n", "", " _", " _", "\n", "3", "|", "4", "|", "5", "\n", "", " _", " _", "\n", "6", "|", "7", "|", "8"];
const board = [[1, -1, 1], [1, 1, 1], [-1, -1, 0]];
const possibleIdx = [[],[],[]];

const possibleChoices = () => {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 0){
                possibleIdx[i].push(j);
            }        
        }
    }
}

const computerRandomArr = () => {
    const randomArr = Math.floor(Math.random() * possibleIdx.length);    
    
    return possibleIdx.indexOf(possibleIdx[randomArr]);   
      
}

const computerRandomArrElem = (computerRandomArr) => {    
    const randomElemArr = Math.floor(Math.random() * possibleIdx[computerRandomArr].length);
    
    return possibleIdx[computerRandomArr][randomElemArr];

}
    
    

const checkWinner = () => {
    if(board[0][0] + board[0][1] + board[0][2] == 3 || board[0][0] + board[0][1] + board[0][2] == -3){
        console.log("THERE IS A WINNER");

    }else if(board[1][0] + board[1][1] + board[1][2] == 3 || board[1][0] + board[1][1] + board[1][2] == -3){
        console.log("THERE IS A WINNER");

    }else if(board[2][0] + board[2][1] + board[2][2] == 3 || board[2][0] + board[2][1] + board[2][2] == -3){
        console.log("THERE IS A WINNER");

    }else if(board[0][0] + board[1][0] + board[2][0] == 3 || board[0][0] + board[1][0] + board[2][0] == -3){
        console.log("THERE IS A WINNER");

    }else if(board[0][1] + board[1][1] + board[2][1] == 3 || board[0][1] + board[1][1] + board[2][1] == -3){
        console.log("THERE IS A WINNER");

    }else if(board[0][2] + board[1][2] + board[2][2] == 3 || board[0][2] + board[1][2] + board[2][2] == -3){
        console.log("THERE IS A WINNER");
    }
}

const computerTurn = () => {
    if(board[0][0] + board[0][1] + board[0][2] == 2){
        board[0][board[0].indexOf(0)] = -1;

    }else if(board[1][0] + board[1][1] + board[1][2] == 2){
        board[1][board[1].indexOf(0)] = -1;

    }else if(board[2][0] + board[2][1] + board[2][2] == 2){
        board[2][board[2].indexOf(0)] = -1;

    }else if(board[0][0] + board[1][0] + board[2][0] == 2){
        if(board[0][0] == 0){
            board[0][0] = -1;

        }else if(board[1][0] == 0){
            board[1][0] = -1;

        }else if (board[2][0] == 0){
            board[2][0] = -1;

        }

    }else if(board[0][1] + board[1][1] + board[2][1] == 2){
        if(board[0][1] == 0){
            board[0][1] = -1;

        }else if(board[1][1] == 0){
            board[1][1] = -1;

        }else if (board[2][1] == 0){
            board[2][1] = -1;

        }

    }else if(board[0][2] + board[1][2] + board[2][2] == 2){
        if(board[0][2] == 0){
            board[0][2] = -1;

        }else if(board[1][2] == 0){
            board[1][2] = -1;

        }else if (board[0][0] == 0){
            board[2][2] = -1;

        }
    } else {
        const arr = computerRandomArr();
        const elem = computerRandomArrElem(arr);        
        board[arr][elem] = -1;
    }    
}

const valSpot = (input) => {
    if(board[input] !== 0 || board[input] !== O) {
        console.log("This spot is already filled, choose another one!");
        inputPlayer();

    }else {
        board[input] =  1;

    }
}

const playerTurn = () => {       
    prompt.get(inputPlayer, function (err, result) {        
        valSpot(result.input);

    })
}

possibleChoices()
console.log(board, "board");
computerTurn();
checkWinner();


