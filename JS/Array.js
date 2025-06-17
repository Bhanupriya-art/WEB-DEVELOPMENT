let mixedArray = [
  42,                    // number
  "Hello",               // string
  true,                  // boolean
  null,                  // null
  undefined,             // undefined
  { name: "Priya" },     // object
  [1, 2, 3],             // array inside array
  function() { return "Hi"; } // function
];

console.log("Full Array:", mixedArray);
console.log("Accessing values:");
console.log("String:", mixedArray[1]);           // "Hello"
console.log("Object name:", mixedArray[5].name); // "Priya"
console.log("Nested array element:", mixedArray[6][2]); // 3
console.log("Function output:", mixedArray[7]());       // "Hi"
