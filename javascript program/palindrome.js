// This program is to understand palindrome question
palindrome_func = (str) => {
  let rev_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
  }
  if (str == rev_str) {
    console.log("Its Palindrome");
  } else {
    console.log("Its not palindrome");
  }
};

palindrome_func("saaso");
