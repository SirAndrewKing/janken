// these update where they get called from (anywhere "janken(usrInput)" is)
let usrScore = 0;
let cpuScore = 0;
let tieScore = 0;
let totalGames = 0;


const startBtns = document.querySelectorAll(".startBtn");
// looks for input from the class "startBtn"
// then starts a for loop based on the buttons value
// which then starts the game
startBtns.forEach((startBtn) => {
    startBtn.addEventListener("click", function() {
        // code goes here
        let startBtnInput = this.value;

        if (startBtnInput == "unltdPlay") {
            // newGame() placed here to load immediatly after game is started
            
            unltdPlays()
        } else if (startBtnInput == "BO3") {
            console.log("Best Of 3")
            bestOf3()

        } else {
            console.log("something went wrong")
        };
    });
    newGame();
});




function janken(usrInput) {
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


function unltdPlays() {
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("newGBtn").style.display = "block";
    
    const options = document.querySelectorAll(".option");
    
    options.forEach((option) => {
        option.addEventListener("click", function() {

            let usrInput = this.value;
            let result = document.getElementById("result");

            if (result.hasChildNodes()) {
                    result.removeChild(result.childNodes[0]);
            };

            janken(usrInput);
            updateScore();

        });
    });
};

function bestOf3() {
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("newGBtn").style.display = "block";
    
    const options = document.querySelectorAll(".option");
    
    options.forEach((option) => {
        option.addEventListener("click", function() {

            let usrInput = this.value;
            let result = document.getElementById("result");

            if (result.hasChildNodes()) {
                    result.removeChild(result.childNodes[0]);
            };

            janken(usrInput);
            updateScore();

            if(usrScore == 2) {
                let gameDiv = document.getElementById("game");

                while(gameDiv.firstChild) {
                    gameDiv.removeChild(gameDiv.firstChild)
                };

                let h1 = document.createElement("H1");
                let h1T = document.createTextNode("You Won Bro!")

                while (document.getElementById("game").innerHTML.trim().length == 0) {
                    h1.appendChild(h1T)
                    document.getElementById("game").appendChild(h1)
                };

            } else if (cpuScore == 2){
                let gameDiv = document.getElementById("game");

                while(gameDiv.firstChild) {
                    gameDiv.removeChild(gameDiv.firstChild)
                };

                let h1 = document.createElement("H1");
                let h1T = document.createTextNode("You Lost Bro!")

                while (document.getElementById("game").innerHTML.trim().length == 0) {
                    h1.appendChild(h1T)
                    document.getElementById("game").appendChild(h1)
                };

            } else {
                // do nothing here
            };
        });
    });
};

function updateScore() {
      document.getElementById("usrScore").textContent = usrScore;
      document.getElementById("cpuScore").textContent = cpuScore;
      document.getElementById("tieScore").textContent = tieScore;
    };

// it just reloads the page
function newGame() {
    const newGs = document.querySelectorAll(".newG");
    newGs.forEach((newG) => {
        newG.addEventListener("click", function(){
            document.location.reload()
        });
    });
};
