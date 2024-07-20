let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgCont = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winArray = [

        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4,5],
        [6,7,8]
];




boxes.forEach((box) => {
    box.addEventListener("click", () =>{
    if (turnO){
        box.innerText = "O";
        turnO = false;
    } else{
        box.innerText = "X";
        turnO = true;
    }
 box.disabled = true;
 checkkWinner();
 })


})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}



const showWinner = (winwho) => {
    msg.innerText = `Congratulations winner is ${winwho}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}


const checkkWinner = (idx1) => {
    for (let winner of winArray){
        let idx1 = boxes[winner[0]].innerText;
        let idx2 = boxes[winner[1]].innerText;
        let idx3 = boxes[winner[2]].innerText;

        if (idx1 != "" && idx2 != "" && idx3 != ""){
            if(idx1 === idx2 && idx2 === idx3){
                // alert("Winner is " + idx1);
                showWinner(idx1);
            }
        }
    }
}


let enableBoxes= () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgCont.classList.add("hide");
    msg.innerText = "";
};

newBtn.addEventListener("click", enableBoxes);
resetBtn.addEventListener("click", enableBoxes);
