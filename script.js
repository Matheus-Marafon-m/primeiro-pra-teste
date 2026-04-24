const btn = document.getElementById("start-btn");
const screen = document.getElementById("start-screen");
const app = document.getElementById("app");

app.style.display = "none";

btn.addEventListener("click", () => {
    screen.style.display = "none";
    app.style.display = "block";
});



/*const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const app = document.getElementById("app");

startBtn.addEventListener("click", () => {
startScreen.style.display = "none";
app.style.display = "block";
});*/