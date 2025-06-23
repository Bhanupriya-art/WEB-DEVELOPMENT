
// // // //change the headings content after some  seconds  than change the color of the h2 continue... chnage within 2 second



// // // document.querySelector("h1").textContent = "Hello, Bhanu Rana!";

// // // setTimeout(() => {
// // //     document.querySelector("h1").textContent = "Hello, Priya Rana!";
// // // }, 1000);


// // // //change the color of the h1 after some seconds
// // // document.querySelector("h1").style.color = "red";  


// // // //change the color of the h1 after some seconds 
// // // setTimeout(() =>
// // //     document.querySelector("h1").style.color = "blue", 1000);


// // // //change the color of the h1 after some seconds
// // // setTimeout(() => {
// // //     document.querySelector("h1").style.color = "green";
// // // }, 1500);


// // // setTimeout(function(){
// // //     document.querySelector("h1").style.color="pink"
// // // },2000);


// // // setTimeout(function(){
// // //     document.querySelector("h1").style.color="yellow"
// // // },3000);


// // // setTimeout(function(){
// // //     document.querySelector("h1").style.color="orange"

// // // },4000)


// // // setTimeout(function(){
// // //     document.querySelector("h1").style.color="purple"
// // // },200);


// // // setTimeout(function(){
// // //     document.querySelector("h2").style.color="blue"
// // //     },500);


// // // setTimeout(function(){
// // //     document.querySelector("h2").style.color="purple"
// // // },1000);


// // // setTimeout(function(){
// // //     document.querySelector("h3").style.color="purple"
// // // },1500);


// // // setTimeout(function(){
// // //     document.querySelector("h4").style.color="purple"
// // // },2000);


// // // setTimeout(function(){
// // //     document.querySelector("h5").style.color="purple"
// // // },2500);


// // // setTimeout(function(){
// // //     document.querySelector("h6").style.color="purple"
// // // },3000);


// // // //using setinterval

// // // Change content after 2 seconds
// // setTimeout(() => {
// //     document.getElementById("h1").textContent = "Hello World";
// //     document.getElementById("h2").textContent = "Hello Priya";
// //     document.getElementById("h3").textContent = "Hello Bhanu";
// //     document.getElementById("h4").textContent = "Hello Rana";
// //     document.getElementById("h5").textContent = "Hello Rana";
// //     document.getElementById("h6").textContent = "Hello Rana";
// // }, 2000);

// // // Color rotation every 1 second
// // const colors = ["red", "blue", "green", "orange", "purple", "pink"];
// // let index = 0;

// // setInterval(() => {
// //     document.getElementById("h1").style.color = colors[(index + 0) % colors.length];
// //     document.getElementById("h2").style.color = colors[(index + 1) % colors.length];
// //     document.getElementById("h3").style.color = colors[(index + 2) % colors.length];
// //     document.getElementById("h4").style.color = colors[(index + 3) % colors.length];
// //     document.getElementById("h5").style.color = colors[(index + 4) % colors.length];
// //     document.getElementById("h6").style.color = colors[(index + 5) % colors.length];
// //     index++;
// // }, 1000);

// // // Change margin between headings after 5 seconds
// // setTimeout(() => {
// //     const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
// //     tags.forEach(tag => {
// //         document.getElementById(tag).style.marginBottom = "40px";
// //     });
// // }, 5000);



// const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

// // 1. Change text content after 2s
// setTimeout(() => {
//     const names = ["Hello World", "Hello Priya", "Hello Bhanu", "Hello Rana", "Hello Rana", "Hello Rana"];
//     headings.forEach((h, i) => h.textContent = names[i]);
// }, 2000);

// // 2. Change colors every 1s
// const colors = ["red", "blue", "green", "orange", "purple", "pink"];
// let index = 0;
// setInterval(() => {
//     headings.forEach((h, i) => h.style.color = colors[(index + i) % colors.length]);
//     index++;
// }, 1000);

// // 3. Add spacing after 5s
// setTimeout(() => {
//     headings.forEach(h => h.style.marginBottom = "40px");
// }, 5000);




//using callback function to change headings content and color every 10 seconds
// const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

// let index = 0;
// const colors = ["red", "blue", "green", "orange", "purple", "pink"];
// const texts = [
//     "Hello World",
//     "Hello Priya",
//     "Hello Bhanu",
//     "Hello Rana",
//     "Welcome",
//     "Hi There"
// ];

// // Callback function to be called every 10 seconds
// function cb() {
//     headings.forEach((h, i) => {
//         h.textContent = texts[(index + i) % texts.length];   // Change content
//         h.style.color = colors[(index + i) % colors.length]; // Change color
//         h.style.marginBottom = "40px"; // Add gap
//     });
//     index++; // increment to rotate through text and color
// }
// setInterval(cb, 10000); // Run cb() every 10 seconds
// cb(); // Run once immediately on page load





// function func1(){
//     console.log("Hello, this is func1");
// }

// setTimeout(func1, 1000); // Call func1 after 1 seconds
// setTimeout(fucntion(){
//     console.log("Hello, this is func2");
// },1000); // Call func2 after 1 seconds

// setTimeout(() => {
//     console.log("Hello, this is func3");
// }, 1000); // Call func3 after 1 seconds\\


// let count = 1;
// const setIntervalID (() => {
//     count =(count *1);
// console.log(Math.floor(Math.random() * 101));   
// })



// setInterval(() => {
//     console.log(Math.floor(Math.random() * 101));   
//     }, 1000); // Call func4 every 1 seconds\\

console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000); // Call after 1 second
console.log(3);