const frmControls = document.querySelector("#frmControls");
let players = []; //array of player objs
const inptPlayer1 = document.getElementById("player1");
const inptPlayer2 = document.getElementById("player2");
frmControls.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent form submit

  if (inptPlayer1.value != "" && inptPlayer2.value != "") {
    const player1 = new Player(inptPlayer1.value);
    const player2 = new Player(inptPlayer2.value);
    const btnNewGame = document.querySelector("#btnNewGame");
    new Game(6, 7, [player1, player2]);
  } else {
    alert("You must enter a color for each player.");
  }
});
