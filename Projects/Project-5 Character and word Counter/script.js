const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();
  charCount.textContent = text.length;
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;
});
