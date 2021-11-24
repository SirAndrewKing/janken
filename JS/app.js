const options = document.querySelectorAll(".option");

let usrScore = 0;
let cpuScore = 0;
let tieScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function(){

        let usrInput = this.value;
        var result = document.getElementById("result");

        if (result.hasChildNodes()) {
            result.removeChild(result.childNodes[0]);
        }

        janken(usrInput)
        updateScore()
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
    } else if (usrInput == 0 && cpuInput == 1 || usrInput == 1 && cpuInput == 2 || usrInput == 2 && cpuInput == 0) {
        let r = document.createTextNode("You Lose!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        cpuScore++;
    } else {
        let r = document.createTextNode("You Win!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        usrScore++;
    };
};


function updateScore() {
      document.getElementById("usrScore").textContent = usrScore;
      document.getElementById("cpuScore").textContent = cpuScore;
      document.getElementById("tieScore").textContent = tieScore;
    }
