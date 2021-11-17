const options = document.querySelectorAll(".option");
let win = 0;

options.forEach((option) => {
    option.addEventListener("click", function(){

        let answerArray = ["rock", "paper", "scissors"];
        let usrInput = this.value;
        let randAnswer = Math.floor(Math.random() * answerArray.length);
        var result = document.getElementById("result");

        if (result.hasChildNodes()) {
            result.removeChild(result.childNodes[0]);
        }

        janken(usrInput, randAnswer)

    });
});

function janken(arg1, arg2){
    let usrInput = arg1;
    let randAnswer = arg2;
    let para = document.createElement("P")

    if (usrInput == randAnswer){
        let r = document.createTextNode("You Tied!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        //console.log("You Tied!\n");
    } else if (usrInput == 0 && randAnswer == 1 || usrInput == 1 && randAnswer == 2 || usrInput == 2 && randAnswer == 0) {
        let r = document.createTextNode("You Lose!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        //console.log("You Lose!\n");
    } else {
        let r = document.createTextNode("You Win!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        //console.log("You Win!\n");
        
    };
};
