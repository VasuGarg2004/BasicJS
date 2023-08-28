let count = 0;

let increaseC = (c) => { count++; c.textContent = count; updatecolor(c, count); };
let decreaseC = (c) => { count--; c.textContent = count; updatecolor(c, count); };
let resetC = (c) => { count = 0; c.textContent = count; updatecolor(c, count); };

function updatecolor(c, count) {
    if (count > 0) c.style.color = "orange";
    else if (count < 0) c.style.color = "red";
    else if (count == 0) c.style.color = "green";
}

window.onload = init;
function init() {
    const numP = document.getElementById("number");
    const incr = document.querySelector("#increase");  
    const decr = document.querySelector("#decrease");
    const reset = document.querySelector("#reset");
    incr.addEventListener("click", () => increaseC(numP));
    reset.addEventListener("click", () => resetC(numP));
    decr.addEventListener("click", () => decreaseC(numP));
}