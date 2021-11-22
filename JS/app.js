const options = document.querySelectorAll(".option");
let win = 0;

options.forEach((option) => {
    option.addEventListener("click", function(){

        let usrInput = this.value;
        let cpuInput = Math.floor(Math.random() * 3);
        var result = document.getElementById("result");

        if (result.hasChildNodes()) {
            result.removeChild(result.childNodes[0]);
        }

        janken(usrInput, cpuInput)

    });
});

function janken(arg1, arg2){
    let usrInput = arg1;
    let cpuInput = arg2;
    let para = document.createElement("P")

    if (usrInput == cpuInput){
        let r = document.createTextNode("You Tied!");
        para.appendChild(r);
        document.getElementById("result").appendChild(para);
        //console.log("You Tied!\n");
    } else if (usrInput == 0 && cpuInput == 1 || usrInput == 1 && cpuInput == 2 || usrInput == 2 && cpuInput == 0) {
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
