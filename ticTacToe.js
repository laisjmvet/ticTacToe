import prompt from "prompt";

const inputPlayer = {
    properties: {
        input: {
            description: `It's your turn!`,
            pattern: /^[X]$/i,
            message: `You are "X"`
        }
    }
}

const printMatrix = () => {

    for(let row of matrix){        
        process.stdout.write(row);
    }    
}

const matrix = ["0", "|", "2", "|", "4", "\n", "", " _", " _", "\n", "10", "|", "12", "|", "14", "\n", "", " _", " _", "\n", "20", "|", "22", "|", "24"];

const checkWinner = () => {
    if(matrix[0] === matrix[2] && matrix[2] === matrix[4] ||
    matrix[10] === matrix[12] && matrix[12] === matrix[14] ||
    matrix[20] === matrix[22] && matrix[22] === matrix[23] ||
    matrix[0] === matrix[12] && matrix[12] === matrix[23] ||
    matrix[20] === matrix[12] && matrix[12] === matrix[4]){
        
    console.log("WINNER!!");
    }
}

const dontLetWin = () => {
    if(matrix[0] === "X" && matrix[2] === "X" && matrix[4] === "4"){
        matrix[4] = "O";
    }else if(matrix[10] === "X" && matrix[12] === "X" && matrix[14] === "14"){
        matrix[14] = "O";
    }else if(matrix[20] === "X" && matrix[22] === "X" && matrix[24] === "24"){
        matrix[24] = "O";
    }else if(matrix[0] === "X" && matrix[12] === "X" && matrix[24] === "24"){
        matrix[24] = "O";
    }else if(matrix[20] === "X" && matrix[12] === "X" && matrix[4] === "4"){
        matrix[4] = "O";
    }     
}

const playerTurn = () => {
    //console.log(`Do you want to play again? Y/N`);    
    
    prompt.get(inputPlayer, function (err, result) {
        if(result.input.toUpperCase() == "N") {

            console.log("\nGAME OVER \n".bold, results);
            return;
        }
        playGame();
        
    })
}

printMatrix();
checkWinner();
dontLetWin();
console.log("\n\n");
printMatrix();
