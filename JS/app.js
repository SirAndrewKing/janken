const starts = document.querySelectorAll(".start");
const newGs = document.querySelectorAll(".newG");

// these update where they get called from (anywhere "janken(usrInput)" is)
let usrScore = 0;
let cpuScore = 0;
let tieScore = 0;
let totalGames = 0;



// clicking the start button on the site starts the game
// the game is not operational until the start button is clicked
starts.forEach((start) => {
    start.addEventListener("click", function() {

        document.getElementById("start").style.display = "none";
        // unhides the game div (none > block)
        document.getElementById("game").style.display = "block";
        // everything after this line only works when the start button is clicked.
        const options = document.querySelectorAll(".option");

        // placed here to load immediatly after game is started
        newGame();

        options.forEach((option) => {
            option.addEventListener("click", function(){

                let usrInput = this.value;
                let result = document.getElementById("result");

                if (result.hasChildNodes()) {
                        result.removeChild(result.childNodes[0]);
                };

                janken(usrInput);
                updateScore();

            });
        });
    });
});


function janken(usrInput){
    let para = document.createElement("P")
    let cpuInput = Math.floor(Math.random() * 3);

    if (usrInput == cpuInput){
        let r = document.createTextNode("You Tied!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        tieScore++;
        totalGames++;
    } else if (usrInput == 0 && cpuInput == 1 || usrInput == 1 && cpuInput == 2 || usrInput == 2 && cpuInput == 0) {
        let r = document.createTextNode("You Lose!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        cpuScore++;
        totalGames++;
    } else {
        let r = document.createTextNode("You Win!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        usrScore++;
        totalGames++;
    };
};


function updateScore(){
      document.getElementById("usrScore").textContent = usrScore;
      document.getElementById("cpuScore").textContent = cpuScore;
      document.getElementById("tieScore").textContent = tieScore;
    };


function newGame(){

    newGs.forEach((newG) => {
        newG.addEventListener("click", function(){

            //hides the game div
            document.getElementById("game").style.display = "none";
            //unhides the start div
            document.getElementById("start").style.display = "block";
            
        });
    });
};
