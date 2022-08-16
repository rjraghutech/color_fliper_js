let flipBtn = document.querySelector(".flip-btn");
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];;
let colorCode = document.querySelector(".color-code");

flipBtn.addEventListener("click", (eve) => {
    let autoColor = "#";
    for(let i = 0; i < 6; i++){
        autoColor += colors[Math.floor(Math.random() * colors.length)];
    }

    document.body.style.backgroundColor = autoColor;
    colorCode.textContent = autoColor;
});