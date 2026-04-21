const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const app = document.getElementById("app");

startBtn.addEventListener("click", () => {
startScreen.style.display = "none";
app.style.display = "block";
});