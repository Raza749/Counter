


const addBtn = document.querySelector(".incrementBtn");
const reductBtn = document.querySelector(".decrementBtn");
const counter = document.querySelector(".counter");
let num = 0;

addBtn.addEventListener("click",addNumbers);
reductBtn.addEventListener("click",reductNumbers);

function addNumbers(){
  let counterInNumber = parseInt(counter.innerText);
  num = counterInNumber + 1;
  counter.innerText = num;
};

function reductNumbers(){
    let counterInNumber = parseInt(counter.innerText);
    num = counterInNumber - 1;
    counter.innerText = num;
}


