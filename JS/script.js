function changeColor() {
  const colors = ["#f8b400", "#3ac569", "#2d87f0", "#f54291", "#ff5733"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
