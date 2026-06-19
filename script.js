let count =0;
const countDisplay = document.getElementById("count");
function updateDisplay(){
    countDisplay.textContent = count;
}
const plus = document.getElementById("plus");
plus.addEventListener("click",()=>{
    count++;
    updateDisplay()
})


const minus = document.getElementById("minus");
minus.addEventListener("click",()=>{
    count--;
    updateDisplay();
})
const reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    count = 0;
    updateDisplay()
})