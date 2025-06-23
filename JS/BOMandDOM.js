//DOM Examples
const paras = document.getElementsByTagName("p");
paras[0].style.color = "red";  // First paragraph in red
const heading = document.getElementById("heading");
heading.textContent = "Hello, Bhanu Rana!";


//BOM Examples
alert("Welcome to the page!");
// Log the current URL
console.log("URL is: " + window.location.href);
// Show browser info
console.log("Browser Info: " + navigator.userAgent);
// Update heading again after 3 seconds
setTimeout(() => {
    heading.textContent = "Updated after 3 seconds!";
}, 3000);


// const span = document.createElement("p");
// parseFloat.textContent = "Hello Javascript";
// document.body.appendChild(span);
