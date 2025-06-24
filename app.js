// Currency system
let pixelCurrency = 0;
const currencyDisplay = document.getElementById('currency');

// Get timer input value (in seconds)
const customMinutesInput = document.getElementById('customMinutes'); // Input field for custom minutes
let timeLeft = 25 * 60; // Default 25 minutes in seconds
let timerInterval = null;

// Get HTML elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

// Update timer display function
function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60); // Get minutes
  const secs = seconds % 60;             // Get remaining seconds
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Start timer function
startButton.addEventListener('click', () => {
  // Get custom input value if available
  const customMinutes = parseInt(customMinutesInput.value);
  if (!isNaN(customMinutes)) {
    timeLeft = customMinutes * 60;
    updateTimerDisplay(timeLeft);
  }

  // Start countdown only if not already running
  if (timerInterval === null) {
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay(timeLeft);

      // When timer reaches 0
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;

        // Add pixel coins
        pixelCurrency += 5;
        currencyDisplay.textContent = pixelCurrency;

        alert("Time's up! Great job!");
      }
    }, 1000); // Runs every 1000ms (1 second)
  }
});

// Pause timer function
pauseButton.addEventListener('click', () => {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// Reset timer function
resetButton.addEventListener('click', () => {
  // Stop the timer if it's running
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Reset time to custom input value or default
  const customMinutes = parseInt(customMinutesInput.value);
  if (!isNaN(customMinutes)) {
    timeLeft = customMinutes * 60;
  } else {
    timeLeft = 25 * 60;
  }

  // Update display to new time
  updateTimerDisplay(timeLeft);
});



