let num = 0;
let procNoBtn = document.querySelector(".procrastinate-no");
let procBox = document.querySelector(".box-procrastinate");
let body = document.querySelector("body");

procNoBtn.addEventListener("mouseover", checkMousePos);

function checkMousePos() {
        num = num % 4 + 1;
        moveRandom(num);
}


function moveRandom(num) {
    const positions = [
        { top: "150px", left: "0" },
        { top: "-280px", left: "200px" },
        { top: "-90px", left: "-450px" },
        { top: "150px", left: "450px" }
    ];

    const { top, left } = positions[num - 1];
    procNoBtn.style.position = "relative";
    procNoBtn.style.top = top;
    procNoBtn.style.left = left;
}
