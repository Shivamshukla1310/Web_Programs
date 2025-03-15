// This program is to count the number of vowels in a string

let find_vowel = (str) => {
  let vowel_count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (
      str[i] == "a" ||
      str[i] == "A" ||
      str[i] == "i" ||
      str[i] == "I" ||
      str[i] == "u" ||
      str[i] == "U" ||
      str[i] == "o" ||
      str[i] == "O" ||
      str[i] == "e" ||
      str[i] == "E"
    ) {
      vowel_count += 1;
    }
  }
  console.log("Total Vowel In String: " + vowel_count);
};

let s = "Hello My Name Is Shivam Kumar Shukla";
find_vowel(s);
