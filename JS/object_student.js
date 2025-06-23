let student = {
  name: "Bhanu Priya",
  age: 19,
  rollNumber: "12222231",
  isPassed: true,
  subjects: ["Math", "Science", "English"],
  address: {
    city: "Mandi",
    state: "Himachal Pradesh",
    pin: 175001
  },
  greet: function() {
    return "Hello, I am " + this.name;
  }
};
console.log("Student Details:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Roll Number:", student.rollNumber);
console.log("Subjects:", student.subjects.join(", "));
console.log("Lives in:", student.address.city + ", " + student.address.state);
console.log("Greeting:", student.greet());
function splitByChar(text) {
  console.log(text.split(""));
}

splitByChar("Bhanu");

function trimtext(text){
  console.log(text.trim());
} trimtext("   Bhanu Priya   ");
function replaceText(text, oldText, newText) {
  console.log(text.replace(oldText, newText));
}
replaceText("Hello Bhanu", "Bhanu", "Priya");
function toUpperCase(text) {
  console.log(text.toUpperCase());
}
toUpperCase("hello bhanu priya");
function toLowerCase(text) {
  console.log(text.toLowerCase());
}
toLowerCase("HELLO BHANU PRIYA");
function concatText(text1, text2) {
  console.log(text1.concat(" ", text2));
}
concatText("Hello", "Bhanu Priya");
function getSubstring(text, start, end) {
  console.log(text.substring(start, end));
}
getSubstring("Hello Bhanu Priya", 6, 11);
function getCharAt(text, index) {
  console.log(text.charAt(index));
}
getCharAt("Hello Bhanu Priya", 6);
function getLength(text) {
  console.log(text.length);
}
getLength("Hello Bhanu Priya");
function includesText(text, searchText) {
  console.log(text.includes(searchText));
}
includesText("Hello Bhanu Priya", "Bhanu");
function indexOfText(text, searchText) {
  console.log(text.indexOf(searchText));
}
indexOfText("Hello Bhanu Priya", "Bhanu");
function lastIndexOfText(text, searchText) {
  console.log(text.lastIndexOf(searchText));
}
lastIndexOfText("Hello Bhanu Priya Bhanu", "Bhanu");
function startsWithText(text, searchText) {
  console.log(text.startsWith(searchText));
}
startsWithText("Hello Bhanu Priya", "Hello");
function endsWithText(text, searchText) {
  console.log(text.endsWith(searchText));
}
endsWithText("Hello Bhanu Priya", "Priya");
function repeatText(text, count) {
  console.log(text.repeat(count));
}
repeatText("Hello ", 3);
function splitText(text, separator) {
  console.log(text.split(separator));
}
splitText("Hello Bhanu Priya", " ");
function findText(text, searchText) {
  console.log(text.search(searchText));
}
findText("Hello Bhanu Priya", "Bhanu");
function matchText(text, regex) {
  console.log(text.match(regex));
}
matchText("Hello Bhanu Priya", /Bhanu/);
function replaceAllText(text, searchText, newText) {
  console.log(text.replaceAll(searchText, newText));
}
replaceAllText("Hello Bhanu Priya Bhanu", "Bhanu", "Priya");
// time_from_seconds.js
// Convert total seconds into various time units
// Example: Convert 86400 seconds (1 day) into minutes, hours, days, months, and years
function convertTime(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const remainingAfterDays = totalSeconds % 86400;
  const hours = Math.floor(remainingAfterDays / 3600);
  const remainingAfterHours = remainingAfterDays % 3600;
  const minutes = Math.floor(remainingAfterHours / 60);
  const seconds = remainingAfterHours % 60;
  // Pad with zeros for clean formatting
  return `${days} days, ${hours.toString().padStart(2, "0")} hours, ${minutes.toString().padStart(2, "0")} minutes, ${seconds.toString().padStart(2, "0")} seconds`;
}

// Example usage



let totalSeconds = 86400; // Example total seconds
let minutes = totalSeconds/60;
let hours = totalSeconds/3600;
let days = totalSeconds/(3600 * 24);
let months = days/30;   
let years = days/365;    
console.log("Given Seconds: " + totalSeconds);
console.log("In Minutes: " + minutes.toFixed(2));
console.log("In Hours: " + hours.toFixed(2));
console.log("In Days: " + days.toFixed(2));
console.log("In Months (approx): " + months.toFixed(2));
console.log("In Years (approx): " + years.toFixed(2));



let totalSecond = 172800 + 4500; // Example: 2 days + 4500 seconds
let day = Math.floor(totalSeconds / 86400);
let remainingAfterDays = totalSeconds % 86400;
let hour = Math.floor(remainingAfterDays / 3600);
let remainingAfterHours = remainingAfterDays % 3600;
let minute = Math.floor(remainingAfterHours / 60);
let seconds = remainingAfterHours % 60;
// Pad with zeros for clean formatting
let result = `${days} days, ${hours.toString().padStart(2, "0")} hours, ${minutes.toString().padStart(2, "0")} minutes, ${seconds.toString().padStart(2, "0")} seconds`;

console.log(result);
