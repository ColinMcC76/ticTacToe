// creates the page
let count = 1
let winners = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]
]
let gameStatus = ['', '', '', '', '', '', '', '', ''];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let game = true
player1Score = 0
player2Score = 0

function setup() {
    let myApp = document.getElementById("myApp")
    var title = document.createElement("h1");
    title.innerText = "Tic Tac Toe";
    title.className = "col-12 display-3 text-center";
    document.body.appendChild(title);
    var player = document.createElement("div");
    player.className = "text-center size";
    var currentPlayer = document.createElement("p");
    currentPlayer.innerText = "Player O's turn"
    player.appendChild(currentPlayer);
    document.body.appendChild(player);
    var scoreDiv = document.createElement("div");
    scoreDiv.className = "text-center"
    var scoreRow = document.createElement("row");
    scoreRow.className = "row justify-content-center";
    var score1Div = document.createElement("div");
    var score2Div = document.createElement("div");
    score1Div.className = "col-sm-6 col-md-4 correction"
    score2Div.className = "col-sm-6 col-md-4 correction"
    var score1 = document.createElement("p");
    var score2 = document.createElement("p");
    score1.innerText = "Player 1: " + player1Score
    score2.innerText = "Player 2: " + player2Score
    var btn = document.createElement("div")
    btn.className = "col-sm-6 col-md-4 correction"
    var reset = document.createElement("button")
    reset.className = "btn-dark"
    reset.innerText = "New Game"
    btn.onclick = newGame
    btn.appendChild(reset)
    score1Div.appendChild(score1)
    score2Div.appendChild(score2)
    scoreRow.appendChild(score1Div)
    scoreRow.appendChild(btn)
    scoreRow.appendChild(score2Div)
    scoreDiv.appendChild(scoreRow)
    document.body.appendChild(scoreDiv)
        // creates the game board
    var game = document.createElement("div");
    currentPlayer.setAttribute("id", "currentPlayer")
    game.className = "game my-3 col-12 container-fluid";
    let x = 1;
    for (let i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.className = "row"
        for (let j = 0; j < 3; j++) {
            var col = document.createElement("div");
            col.className = "col-4 border border-dark"
            col.setAttribute("id", x)
            x++
            col.onclick = toggleTurn
            var para = document.createElement("p")
            col.style.backgroundColor = "white"
            col.appendChild(para)
            row.appendChild(col);
        }
        game.appendChild(row);
    }
    // created the reset button 
    document.body.appendChild(game)
    var btn = document.createElement("div")
    btn.className = "text-center"
    var reset = document.createElement("button")
    reset.className = "btn-dark size"
    reset.innerText = "Reset"
    btn.onclick = startOver
    btn.appendChild(reset)
    document.body.appendChild(btn)
}

// function for the reset button 
function startOver() {
    // console.log("hey")
    document.body.innerHTML = " "
    count = 1
    game = true
    setup()
}

function newGame() {
    // console.log("hey")
    document.body.innerHTML = " "
    count = 1
    game = true
    player1Score = 0
    player2Score = 0
    setup()
}

// check to see if there is a winner
function checkWinner() {
    for (let i = 0; i < winners.length; i++) {
        let check1 = document.getElementById(winners[i][0])
        let check2 = document.getElementById(winners[i][1])
        let check3 = document.getElementById(winners[i][2])
        if (check1.textContent === check2.textContent &&
            check2.textContent === check3.textContent &&
            check3.textContent === "X") {
            currentPlayer.innerText = "congrats X won"
            check1.style.backgroundColor = "blue"
            check2.style.backgroundColor = "blue"
            check3.style.backgroundColor = "blue"
            game = false
            player2Score++

            let j = 0
            while (j < arr.length) {
                document.getElementById(arr[j]).onclick = " "
                j++
            }
        }
        if (check1.textContent === check2.textContent &&
            check2.textContent === check3.textContent &&
            check3.textContent === "O") {
            currentPlayer.innerText = "congrats O won"
            game = false
            player1Score++
            check1.style.backgroundColor = "blue"
            check2.style.backgroundColor = "blue"
            check3.style.backgroundColor = "blue"
            let j = 0
            while (j < arr.length) {
                document.getElementById(arr[j]).onclick = " "
                j++
            }
            break;
        } else if (count == 10 && game) {
            currentPlayer.innerText = "congrats it's a tie"
        }
    }
}


function toggleTurn(e) {
    var playerChoice = document.getElementById(e.target.id);
    if (count % 2 == 0) {
        // console.log('o')
        currentPlayer.innerText = "Player O's turn"
        playerChoice.innerHTML = "X";
        // gameStatus[e.target.id - 1] = "x"
        // console.log('x')
        // document.getElementById(Math.floor(Math.random() * 9));
        // aiMove.innerText = "X"
    } else {
        currentPlayer.innerText = "Player X's turn";
        playerChoice.innerHTML = "O";
        // gameStatus[e.target.id - 1] = "o"
    }
    count++
    // who won, is it a win or a tie?
    // wins come from vertical, horizontal, or diagonal matches
    checkWinner()
    playerChoice.onclick = " "
}
// runs the entire page, onload.
setup()