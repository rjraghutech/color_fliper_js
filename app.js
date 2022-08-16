let flipBtn = document.querySelector(".flip-btn");
let colors = ["green", "red", "yellow", "blue", "grey", "purple", "aqua", "black", "orange", "voilet"];
let colorCode = document.querySelector(".color-code");

flipBtn.addEventListener("click", (eve) => {
    const randomNumber = Math.floor(Math.random() * colors.length);;
    document.body.style.backgroundColor = colors[randomNumber];
    colorCode.textContent = colors[randomNumber];
});