let secretNumber = Math.floor(Math.random() * 101);
let attemptsLeft = 7;
let minRange = 0;
let maxRange = 100;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const rangeHint = document.getElementById("rangeHint");
  const attempts = document.getElementById("attempts");

  if (isNaN(guess) || guess < 0 || guess > 100) {
    message.textContent = "❗ Please enter a number between 0 and 100.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 You got it right! ${guess} is the secret number!`;
    message.style.color = "lime";
    rangeHint.textContent = "";
    disableInput();
  } else {
    attemptsLeft--;
    attempts.textContent = attemptsLeft;

    if (guess < secretNumber) {
      message.textContent = "📉 Too low!";
      if (guess >= minRange) minRange = guess + 1;
    } else {
      message.textContent = "📈 Too high!";
      if (guess <= maxRange) maxRange = guess - 1;
    }

    if (attemptsLeft === 0) {
      message.textContent = `❌ Game Over! The number was ${secretNumber}.`;
      message.style.color = "red";
      rangeHint.textContent = "";
      disableInput();
    } else {
      rangeHint.textContent = `🔍 Hint: Try a number between ${minRange} and ${maxRange}`;
    }
  }
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}




