
// // // want to create an array and access its values
// // // let mixedArray = [
// // //   42,                    // number
// // //   "Hello",               // string
// // //   true,                  // boolean
// // //   null,                  // null
// // //   undefined,             // undefined
// // //   { name: "Priya" },     // object
// // //   [1, 2, 3],             // array inside array
// // //   function() { return "Hi"; } // function
// // // ];

// // // console.log("Full Array:", mixedArray);
// // // console.log("Accessing values:");
// // // console.log("String:", mixedArray[1]);           // "Hello"
// // // console.log("Object name:", mixedArray[5].name); // "Priya"
// // // console.log("Nested array element:", mixedArray[6][2]); // 3
// // // console.log("Function output:", mixedArray[7]());       // "Hi"


// // // want to create an array  and do some changes or operation on it like assigning 
// // // let numbers = [1, 2, 3, 4, 5];
// // // let arrray = numbers;
// // // console.log("Original array:", numbers);
// // // console.log("Array after assignment:", arrray);
// // // arrray[3] = 20;
// // // console.log("Modified array:", arrray);
// // // console.log("Original array after modification:", numbers); 

// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it will change the first one also
// // // let person = {
// // //   name: "John",
// // //   age: 30,
// // //   city: "New York"
// // // };
// // // console.log("Original object:", person);
// // // let anotherPerson = person;
// // // console.log("Object after assignment:", anotherPerson);
// // // anotherPerson.age = 35;
// // // console.log("Modified object:", anotherPerson);
// // // console.log("Original object after modification:", person); 

// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one
// // // let originalArray =[1,2,3,4,5,6,7,8,9,10];
// // // let copiedArray = [...originalArray]; // Using spread operator to create a shallow copy
// // // console.log("Original array:", originalArray);
// // // console.log("Copied array:", copiedArray);
// // // copiedArray[0] = 100; // Modifying 
// // // console.log("Modified copied array:", copiedArray);
// // // console.log("Original array after modification of copied array:", originalArray); // Original array remains unchanged

// // // want to create an object and after that create another variable and assign the first object to it but when we change the second variable it should not change the first one
// // // const obj1 ={ user:{name:"Priya", age: 25}, city:"New York"};
// // // const obj2 ={...obj1};
// // // obj2.user.name = "Priya Priya";
// // // console.log(obj1.user.name); 
// // // console.log(obj2.user.name); // obj2 is a new object and obj1 is the original


// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one
// // // let arr1 = [1, 2, 3, 4, 5];
// // // let arr2 = arr1.slice(); // Using slice to create a shallow copy
// // // arr2[0] = 100; // Modifying the copied array
// // // console.log("Original array:", arr1); // Original array remains unchanged
// // // console.log("Copied array:", arr2); // Copied array is modified
// // // arr2.push(10); // Adding an element to the copied array
// // // console.log("Original array after modification of copied array:", arr1); // Original array remains unchanged
// // // console.log("Copied array after modification:", arr2); // Copied array is modified
// // // arr1.push(10); // Adding an element to the original array
// // // console.log("Original array after modification of original array:", arr1); // Original array is modified
// // // console.log("Copied array after modification of original array:", arr2); // Copied array
// // // arr1[0] = 100; // Modifying the original array
// // // console.log("Original array after modification of original array:", arr1); // Original array is modified
// // // console.log("Copied array after modification of original array:", arr2); // Copied array

// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one
// // // let array1 = [1, 2, 3, 4, 5];
// // // let array2 = [array1,9,8,7]; 
// // // console.log("Original array:", array1); // Original array
// // // console.log("Array with nested array:", array2); // Array with nested array


// // //want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one // with slice method and give start and end values
// // // let array3 = [1, 2, 3, 4, 5];
// // // let array4 = array3.slice(0, 3); // Using slice to create a
// // // // shallow copy with start and end values
// // // console.log("Original array:", array3); // Original array
// // // console.log("Copied array with slice:", array4); // Copied array with slice


// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one // with for each method 
// // // let array5 = [1,2,3,4,5];
// // // let array6 = [];
// // // array5.forEach(function(item) {
// // //   array6.push(item); // Pushing each item into the new array
// // // });
// // // console.log("Original array:", array5); // Original array
// // // console.log("Copied array using forEach:", array6); // Copied array using forEach   
// // // // Modifying the copied array
// // // array6[0] = 100;
// // // console.log("Original array after modification of copied array:", array5); // Original array remains unchanged
// // // console.log("Copied array after modification:", array6); // Copied array is modified
// // // // Adding an element to the copied array
// // // array6.push(10);
// // // console.log("Original array after modification of copied array:", array5); // Original array remains unchanged
// // // console.log("Copied array after modification:", array6); // Copied array is modified
// // // // Adding an element to the original array
// // // array5.push(10);
// // // console.log("Original array after modification of original array:", array5); // Original array is modified
// // // console.log("Copied array after modification of original array:", array6); // Copied array remains



// // // want to print the array in a single line with comma separated values
// // console.log(array5.join(","));
// // function callback(element) {{
// //   console.log(element);

// //   }}
// //   array5.forEach(callback); // Using a callback function to print each element of the array


// //   //want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one // with map method
// //   console.log(newArr);
// //   function computeSqure(element){
// //     return(element* element);
// //   }
// //   function doNothing(element) {
// //     return element;
// //   }
// //   function computeCube(element) {
// //     return element * element * element;
// //   }
// //   const arr1 = arr.map(computeCube); 
// //   const arr2 = arr.map(computeSqure);
// //   const arr3 = arr.map(doNothing);
// //   console.log("Array after mapping to compute cube:", arr1);
// //   console.log("Array after mapping to compute square:", arr2);
// //   console.log("Array after mapping to do nothing:", arr3);

// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one // with filter method
// // const arr = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
// // const evenNumbers = arr.filter(function(element) {
// //   return element % 2 === 0; // Filtering even numbers
// // });
// // const oddNumbers = arr.filter(function(element) {
// //   return element % 2 !== 0; // Filtering odd numbers
// // });
// // console.log("Original array:", arr);
// // console.log("Even numbers:", evenNumbers);
// // console.log("Odd numbers:", oddNumbers);   

// // // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one // with reduce method
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue; // Summing up the elements
// }
// , 0); // Initial value of accumulator is 0
// console.log("Original array:", numbers);
// console.log("Sum of elements:", sum); // Output: 15

// // want to create an array and after that create another variable and assign the first array to it but when we change the second variable it should not change the first one // with find method
// const arr2 = [1, 2, 3, 4, 5];
// const foundElement = arr2.find(function(element) {
//   return element > 3; // Finding the first element greater than 3
// }
// );
// console.log("Original array:", arr2);
// console.log("First element greater than 3:", foundElement); // Output: 4    
// // want to create an array and after that create another variable and assign the first array to it but
