gridNumber = 5
playerOneShips = 3
enemyShips = 3


function BoardSize(size) {
    let grid = [];
    for(i=0; i < size; i++) {
        grid[i] = [];
    for(j=0; j < size; j++) {
        grid[i][j] = ' ';
    }
    }
    return grid;
}

let playerOneBoard = BoardSize(gridNumber)
let enemyBoard = BoardSize(gridNumber)
console.log(playerOneBoard)
console.log(enemyBoard)

for(i=1; i<=playerOneShips; i++) {
    playerShipLocation = [];
    enemyShipLocation = [];
    columnNumberP = prompt(`What column do you want you ship ${i} to be in?`)
    rowNumberP = prompt(`What row do you want ship ${i} to be in?`)
    let shipLocation = placeShips(columnNumberP, rowNumberP, 'x', playerOneBoard)
    playerShipLocation = playerShipLocation.push(shipLocation)


    // Will be there be an error if they place the ship in the same place
    columnNumberE = Math.round((Math.random()*3))
    rowNumberE = Math.round((Math.random()*3))
    placeEnemyShips (columnNumberE, rowNumberE, 'x', enemyBoard)
    console.log(columnNumberE,rowNumberE)
}
// console.log(playerShipLocation)


function placeShips(columnNumberP, rowNumberP, position, grid) {
    grid[columnNumberP][rowNumberP] = position;
}


function placeEnemyShips(columnNumberE, rowNumberE, position, grid) {
    grid[columnNumberE][rowNumberE] = position;
}

//While Loop - need this to continue until all enemy ships are hit 
// function playerAttack(column,row, attackPosition, enemyBoard){

for(y=0; y<3; y++){
   column = prompt('Select a column for your attack')
    row = prompt("Select a row for your attack")
    // if(grid[columnE][rowE] == 'x'){
    placePlayerAttack(column, row, enemyBoard)
    // } else if(grid[columnE][rowE] = ' ') {
    //     placePlayerAttack(column,row, 'o', enemyBoard)
    // }
    columnE = Math.round((Math.random()*3))
    rowE = Math.round((Math.random()*3))

    placeEnemyAttack(columnE,rowE, playerOneBoard)

    console.log(playerOneBoard)
    console.log(enemyBoard)
}


    // placeEnemyAttack(columnE,rowE,'o', playerOneBoard)



function placePlayerAttack(column, row, grid){ 
if ((grid[column][row]) == 'x') {
    (grid[column][row]) = '!';
    return true
} else if (grid[column][row] == ' ') {
    (grid[column][row]) = 'o'
    return false
} else {
    return false
}
}
    




function placeEnemyAttack(columnE, rowE, grid){ 
    if ((grid[columnE][rowE]) == 'x') {
        (grid[columnE][rowE]) = '!';
        return true
    } else if (grid[columnE][rowE] == ' ') {
        (grid[columnE][rowE]) = 'o'
        return false
    } else {
        return false
    }
    

}














// function placeEnemyAttack(columnE, rowE, enemyAttackPosition, grid) {
//     columnE = Math.round((Math.random()*3))
//     rowE = Math.round((Math.random()*3))
//     grid[columnE][rowE] = enemyAttackPosition
//     if(enemyAttackPosition == 'x'){
//         return enemyAttackPosition == '!'
//     } else {
//        return enemyAttackPosition == 'o'
//     }

// }


console.log(playerOneBoard)
console.log(enemyBoard)