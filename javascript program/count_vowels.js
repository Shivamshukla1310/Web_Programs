// This program is to count the number of vowels in a string

let find_vowel = (str) => {
  let vowel_count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (
      i == "a" ||
      i == "A" ||
      i == "i" ||
      i == "I" ||
      i == "u" ||
      i == "U" ||
      i == "o" ||
      i == "O" ||
      i == "e" ||
      i == "E"
    ) {
      vowel_count += 1;
    }
    console.log("Total Vowel In String: " + vowel_count);
  }
};

let s = "Hello My Name Is Shivam Kumar Shukla";
find_vowel(s);
