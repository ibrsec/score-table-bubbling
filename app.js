const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");


//buttons are disabled at the begining
btn1.disabled = true;
btn2.disabled = true;
input.focus();

//declare a variable at global
let scoreToWinCount;

//seperate input event - assign the input value to global variable(scoreToWinCount)
input.oninput = () => {
  btn1.removeAttribute("disabled");
  btn2.removeAttribute("disabled");

  scoreToWinCount = input.value;
  if (+scoreToWinCount < 1) {
    btn1.disabled = true;
    btn2.disabled = true;   
    input.value = "";
    input.focus();
  } else {

    scoreToWinCount = Number(scoreToWinCount);
  }
};



//event for the wrapper of all
container.addEventListener("click", (e) => {


  //player1 button
  if (e.target.className == "btn-1") {
    e.target.closest(".container").querySelector(".player-1").textContent++; //go to the container, and come back to the player1's score
    input.disabled = true; //input can't be changed till the game is over

    //player2 button
  } else if (e.target.className == "btn-2") {
    e.target.closest(".container").querySelector(".player-2").textContent++; //go to the container, and come back to the player2's score
    input.disabled = true; //input can't be changed till the game is over
  }

  //win 
  if (
    e.target.closest(".container").querySelector(".player-1").textContent ==
      scoreToWinCount ||
    e.target.closest(".container").querySelector(".player-2").textContent ==
      scoreToWinCount
  ) {
    //win - buttons are disabled
    btn1.disabled = true;
    btn2.disabled = true;

    //win - style arrangement
    if (e.target.closest(".container").querySelector(".player-1").textContent > e.target.closest(".container").querySelector(".player-2").textContent) {
      e.target.closest(".container").querySelector(".player-1").style.color =
        "green";
      e.target.closest(".container").querySelector(".player-2").style.color =
        "red";
    } else {
      e.target.closest(".container").querySelector(".player-1").style.color =
        "red";
      e.target.closest(".container").querySelector(".player-2").style.color =
        "green";
    }
  }

  //reset button
  if (e.target.className == "reset") {

    //reset the players' scores =
    e.target.closest(".container").querySelector(".player-1").textContent = 0;
    e.target.closest(".container").querySelector(".player-2").textContent = 0;

    //reset the players' score elements' styles
    e.target.closest(".container").querySelector(".player-1").style.color =
      "black";
    e.target.closest(".container").querySelector(".player-2").style.color =
      "black";

    //reset input
    e.target.closest(".container").querySelector("input").value = "";
    e.target
      .closest(".container")
      .querySelector("input")
      .removeAttribute("disabled");

    e.target.closest(".container").querySelector("input").focus();

    
  }
});
