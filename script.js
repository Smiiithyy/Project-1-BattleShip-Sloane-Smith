gridNumber = prompt("How many rows/columns do you want your grid to be?")
playerOneShips = 0;
enemyShips = 3;
let hitplayer = [];
let hitenemy = [];

alert("please place 3 ships on your player board")

let playerTable = document.getElementById("playerBoard");
let enemyTable = document.getElementById("enemyBoard");
d=1
for (a = 0; a < gridNumber; a++) {
  let row = playerTable.insertRow();
  for (b = 0; b < gridNumber; b++) {
    let cell = row.insertCell(b);
    cell.classList.add("playerBoardCell");
    cell.innerHTML = " ";
    cell.setAttribute("num", d++)
  }
}
let c = 1
for (a = 0; a < gridNumber; a++) { 
  let row = enemyTable.insertRow();
  for (b = 0; b < gridNumber; b++) {
    let cell = row.insertCell(b);
    cell.classList.add("enemyBoardCell");
    cell.innerHTML = "";
    cell.setAttribute("id", c++)
        }
  }





let enemyCoordinate = document.querySelectorAll(".enemyBoardCell");
let playerCoordinate = document.querySelectorAll(".playerBoardCell");

// Placing Player Ships
// if(playerOneShips<3) {
  playerCoordinate.forEach((el) => {
    el.addEventListener("click", (event) => {
      if (el.innerHTML === " ") {
        event.target.style.backgroundColor = "blue";
        event.target.innerHTML = "x"
   
      }
      playerOneShips++;
      console.log(playerOneShips)
    });

  });
// }

//Placing Enemy Ships
for(let i=0; i<enemyShips; i++){
    shipPlacement = Math.round(Math.random() * 24)+1;
    console.log(shipPlacement)
    randomselector = document.querySelector(`[id = "${shipPlacement}"`)
    // randomselector.innerHTML ='x'
    console.log((`[id = "${shipPlacement}"`))
    console.log(document.querySelector(`[id = "${shipPlacement}"`).innerHTML)

    randomselector.setAttribute("ship","x")
}


//Determining if we hit the enemy
enemyCoordinate.forEach((el) => {
  el.addEventListener("click", (event) => {
      playerAction = document.querySelector(".betweenBoards")
      console.log(el.getAttribute("ship"))
    if (el.getAttribute("ship") === "x") {
      event.target.style.backgroundColor = "red";
      enemyShips--
      playerAction.innerHTML = "ENEMY HAS BEEN HIT!! Please attack again!"
      console.log(enemyShips)
    } else {
      event.target.style.backgroundColor = "grey";
      console.log(el.innerHTML);
      playerAction.innerHTML = "You Missed. Please attack again"
    }

    enemyAttackSelection = Math.round(Math.random() * 24); 
    //Need to figure out the double selection
 
    randomFire = document.querySelector(`[num = "${enemyAttackSelection}"]`)
    // console.log(randomFire.innerHTML)
    if(randomFire.style.backgroundColor == "blue"){
    randomFire.style.backgroundColor = "red";
    } else {
    randomFire.style.backgroundColor = "grey"
    }
  });
});

//Determining if the Enemy has hit us 


if(enemyShips === 0){
    alert("Player has won! Congrats!")
}else if(playerOneShips === 0){
    alert("Your Ships have been sunk. You lose")
}

//




// let playerOneBoard = BoardSize(gridNumber);
// // let enemyBoard = BoardSize(gridNumber);
// console.log(playerOneBoard);
// console.log(enemyBoard);

// for (let i = 1; i <= playerOneShips; i++) {
//   playerShipLocation = [];
//   enemyShipLocation = [];

//   columnNumberP = prompt(`What column do you want your ship ${i} to be in?`, i);
//   rowNumberP = prompt(`What row do you want ship ${i} to be in?`, i);
//   placeShips(columnNumberP, rowNumberP, "x", playerOneBoard);



//   // Will be there be an error if they place the ship in the same place
//   columnNumberE = Math.round(Math.random() * 3);
//   rowNumberE = Math.round(Math.random() * 3);
//   enemyShipLocation = [columnNumberE,rowNumberE]



//   console.log(enemyShipLocation)
//   placeEnemyShips(columnNumberE, rowNumberE, "x", enemyTable);

// }


// function placeShips(columnNumberP, rowNumberP, position, grid) {
//   // for(z=0; z<playerOneShips; z++){
//   grid[columnNumberP][rowNumberP] = position;
// }



// function placeEnemyShips(columnNumberE, rowNumberE, position, grid) {
//   grid[columnNumberE][rowNumberE] = position;
// }



// while (enemyShips !== 0 || playerOneShips !== 0) {
//   column = prompt("Select a column for your attack");
//   row = prompt("Select a row for your attack");

//   placePlayerAttack(column, row, enemyBoard);

//   if (hitenemy == true) {
//     enemyShips--;
//   }
//   columnE = Math.round(Math.random() * 3);
//   rowE = Math.round(Math.random() * 3);

//   placeEnemyAttack(columnE, rowE, playerOneBoard);
//   if (hitplayer == true) {
//     playerOneShips--;
//   }
//   if (enemyShips == 0) {
//     console.log("Player 1 WON");
//     break;
//   } else if (playerOneShips == 0) {
//     console.log("Enemy Won!");
//     break;
//   }
//   console.log(enemyShips);
//   console.log(playerOneShips);

//   console.log(playerOneBoard);
//   console.log(enemyBoard);
// }

// placeEnemyAttack(columnE,rowE,'o', playerOneBoard)

// function placePlayerAttack(column, row, grid) {
//   if (grid[column][row] == "x") {
//     grid[column][row] = "!";
//     return (hitenemy = true);
//   } else if (grid[column][row] == " ") {
//     grid[column][row] = "o";
//     return (hitenemy = false);
//   } else {
//     return (hitenemy = false);
//   }
// }

// function placeEnemyAttack(columnE, rowE, grid) {
//   if (grid[columnE][rowE] == "x") {
//     grid[columnE][rowE] = "!";
//     return (hitplayer = true);
//   } else if (grid[columnE][rowE] == " ") {
//     grid[columnE][rowE] = "o";
//     return (hitplayer = false);
//   } else {
//     return (hitplayer = false);
//   }
// }
