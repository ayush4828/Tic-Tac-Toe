let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn")
let resetbtn = document.querySelector("#reset")
let turn0 = true;
let count = 0;
const winnerPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = ()=>{
    turn0 = true;
    count = 0;
    enablebox();
    msgContainer.classList.add("hide");
    
}

const disablebox = ()=>{
   for (let box of boxes){
    box.disabled = true;
   }
}

const drawfun = ()=>{
    msg.innerText = "It's a Draw!"
    msgContainer.classList.remove("hide")
    disablebox();
}
const enablebox = ()=>{
   for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
   }
}
const showwinner = (winner)=>{
    msg.innerText = `Congratulation!! , Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
     disablebox();
}


const checkwinner = () => {
    for (let pattern of winnerPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                
               showwinner(pos1);
                return true;   // ⭐ FIX
            }
        }
    }
    return false; // ⭐ important
};

boxes.forEach((box)=>{
    box.addEventListener('click' , ()=>{
    if(turn0){
        box.innerText = "X";
        turn0 = false;
    }
    else{
        box.innerText="O"
        turn0 = true;
    }
    box.disabled = true
    count++;
    let iswinner = checkwinner();

    if(count == 9 && !iswinner){
        drawfun();
    }
    })
})

resetbtn.addEventListener('click' , resetgame);
newbtn.addEventListener('click' , resetgame);

