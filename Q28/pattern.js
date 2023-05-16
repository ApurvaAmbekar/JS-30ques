// Write a program to print the given patterns using the loops-
//	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***
// 
// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***
//
// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//      *
//     ***
//    *****



// let n = 3;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 3; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++){ //external loop
//     for(let j = 0; j < n; j++) { // internal loop
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);















