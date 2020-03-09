// creates the page
let count = 1

function setup() {
    var title = document.createElement("h1")
    title.innerText = "Tic Tac Toe";
    title.className = "col-12 display-3 text-center"
    document.body.appendChild(title);
    var game = document.createElement("div");
    // creates the game board
    game.className = "game my-5 col-12 container-fluid";
    let x = 0
    for (let i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.className = "row"
        for (let j = 0; j < 3; j++) {
            var col = document.createElement("div");
            col.className = "col-4 border"
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
    reset.innerText = "Reset"
    btn.onclick = startOver
    btn.appendChild(reset)
    document.body.appendChild(btn)
}

// function for the reset button 
function startOver() {
    // console.log("hey")
    document.body.innerHTML = " "
    setup()
}

function toggleTurn(e) {
    var playerChoice = document.getElementById(e.target.id);
    // console.log(e.target.id)
    if (count % 2 == 0) {
        console.log('x')
        playerChoice.innerText = "x";
    } else {
        console.log('o')
        playerChoice.innerText = "o";
    }
    count++
    playerChoice.onclick = ""
        // console.log("you did it")
}

setup()