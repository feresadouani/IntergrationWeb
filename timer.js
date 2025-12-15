let timer;
let totalSeconds = 25 * 60;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startPauseBtn = document.getElementById("startPauseBtn");
const startPauseIcon = document.getElementById("startPauseIcon");
const presets = document.querySelectorAll(".preset");

function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timeDisplay.textContent =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      startPauseIcon.textContent = "play_arrow";
    }
  }, 1000);
}

startPauseBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTimer();
    startPauseIcon.textContent = "pause";
    isRunning = true;
  } else {
    clearInterval(timer);
    startPauseIcon.textContent = "play_arrow";
    isRunning = false;
  }
});

presets.forEach(btn => {
  btn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = btn.dataset.minutes * 60;
    updateDisplay();
    startPauseIcon.textContent = "play_arrow";
  });
});

updateDisplay();
