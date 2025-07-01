const textSamples = [
    "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
    "Believe in yourself, take on challenges, and dig deep within yourself to conquer fears.",
    "Learning never exhausts the mind. Each day is a chance to grow and glow.",
    "Your limitation—it’s only your imagination. Push yourself, because no one else is going to do it for you.",
    "Keep going. Everything you need will come to you at the perfect time."
];

const textToTypeElement = document.getElementById('textToType');
const typingInput = document.getElementById('typingInput');
const result = document.getElementById('result');

let startTime = null;
let currentText = "";

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textSamples.length);
    return textSamples[randomIndex];
}

function startTest() {
    currentText = getRandomText();
    textToTypeElement.innerText = currentText;
    typingInput.value = "";
    typingInput.disabled = false;
    typingInput.focus();
    result.innerText = "";
    startTime = new Date();
}

function endTest() {
    if (!startTime) {
        result.innerText = "⚠️ Please click 'Start' before finishing the test.";
        return;
    }

    const endTime = new Date();
    const totalTimeInSeconds = (endTime - startTime) / 1000;

    const typedText = typingInput.value.trim();
    const totalWordsTyped = typedText ? typedText.split(/\s+/).length : 0;
    const totalCharsTyped = typedText.length;

    const wpm = totalTimeInSeconds > 0 ? Math.round((totalWordsTyped / totalTimeInSeconds) * 60) : 0;

    const originalWords = currentText.split(/\s+/);
    const typedWords = typedText.split(/\s+/);

    let correctWords = 0;
    for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i] === originalWords[i]) {
            correctWords++;
        }
    }

    const accuracy = Math.round((correctWords / originalWords.length) * 100);

    result.innerHTML = `
    <strong>Time:</strong> ${Math.round(totalTimeInSeconds)} sec<br>
    <strong>WPM:</strong> ${wpm}<br>
    <strong>Accuracy:</strong> ${accuracy}%<br>
    <strong>Characters typed:</strong> ${totalCharsTyped}`;

    typingInput.disabled = true;
    startTime = null;
}
