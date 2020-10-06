function genCheckboard (nbRows, nbColumns) {
    let checkboard = new Array(nbRows);
    for (let k = 0; k < nbRows ; k++){
        checkboard[k] = new Array(nbColumns);
    }
    
    for (let i=0; i < nbRows; i++){
        if (i  %2 != 0){
            checkboard[i][0] = " ";
        } 
        else {
            checkboard[i][0] = "X";
        }
        for (let j = 1; j < nbColumns; j++){
            if (checkboard[i][j-1] === "X"){
                checkboard[i][j] = " ";
            }
            else {
                checkboard[i][j] = "X";
            }
        }
    }
  
    return checkboard;
}       

console.log(genCheckboard(9,5));

function genCheckboardV2 (nbRows, nbColumns) {
    let checkboard = new Array(nbRows);
    for (let k = 0; k < nbRows ; k++){
        checkboard[k] = new Array(nbColumns);
    }
    
    for (let i = 0; i < nbRows; i++){{
        i %2 != 0 ? checkboard[i][0] = " " : checkboard[i][0] = "X";
        } 
        for (let j = 1; j < nbColumns; j++){
            checkboard[i][j-1] === "X" ? checkboard[i][j] = " " : checkboard[i][j] = "X";
        }
    }  
    return checkboard;
}

console.log(genCheckboardV2(8,6));