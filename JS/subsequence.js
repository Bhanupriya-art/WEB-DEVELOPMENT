const items = [
  "fruit", "pizza", "pineapple", "samosa", "tomato", "vegetable",
  "mango", "guava", "grapes", "strawberry"
];

const resultListElement = document.getElementById("result-list");
const searchBox = document.getElementById("search");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim();
  resultListElement.innerHTML = "";

  if (query === "") return;

  const result = items.filter(item => isSubsequence(query, item));

  if (result.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No match found";
    resultListElement.appendChild(li);
    return;
  }

  result.forEach((res) => {
    const li = document.createElement("li");
    li.textContent = res;
    resultListElement.appendChild(li);
  });
});

function isSubsequence(query, word) {
  let i = 0, j = 0;
  while (i < query.length && j < word.length) {
    if (query[i].toLowerCase() === word[j].toLowerCase()) {
      i++;
    }
    j++;
  }
  return i === query.length;
}
