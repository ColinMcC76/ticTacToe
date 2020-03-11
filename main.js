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
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function setup() {
    var title = document.createElement("h1")
    title.innerText = "Tic Tac Toe";
    title.className = "col-12 display-3 text-center"
    document.body.appendChild(title);
    var player = document.createElement("div")
    player.className = "text-center"
    var currentPlayer = document.createElement("p");
    currentPlayer.innerText = "Player O's turn"
    player.appendChild(currentPlayer)
    document.body.appendChild(player)
    var game = document.createElement("div");
    // creates the game board
    currentPlayer.setAttribute("id", "currentPlayer")
    game.className = "game my-5 col-12 container-fluid";
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
    reset.className = "btn-dark"
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
    setup()
}

function toggleTurn(e) {
    var playerChoice = document.getElementById(e.target.id);
    if (count % 2 == 0) {
        // console.log('o')ZZZ
        currentPlayer.innerText = "Player O's turn"
        playerChoice.innerHTML = "X";
    } else {
        // console.log('x')
        currentPlayer.innerText = "Player X's turn"
        playerChoice.innerHTML = "O";
    }
    count++
    // who won, is it a win or a tie?
    // wins come from vertical, horizontal, or diagonal matches
    for (let i = 0; i < winners.length; i++) {
        let check1 = document.getElementById(winners[i][0])
        let check2 = document.getElementById(winners[i][1])
        let check3 = document.getElementById(winners[i][2])
        if (check1.textContent === check2.textContent &&
            check2.textContent === check3.textContent &&
            check3.textContent === "X") {
            currentPlayer.innerText = "congrats X won"
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
            let j = 0
            while (j < arr.length) {
                document.getElementById(arr[j]).onclick = " "
                j++
            }
        } else if (count == 10) {
            currentPlayer.innerText = "congrats it's a tie"
        }
    }
    playerChoice.onclick = " "
}
// runs the entire page, onload.
setup()