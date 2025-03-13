// This program is to reverse the given string

// function reverseString(str) {
//   for (let i = str.length; i >= 0; i--) {
//     console.log(str[i] + " ");
//   }
// }

// reverseString("Hello");

// Well the above approach prints the string in new line so to overcome that thing we can use another method

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
}

reverseString("Hello");
