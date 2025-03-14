// This program is to understand palindrome question
palindrome_func = (str) => {
  const rev_str = (str) => console.log(str.split("").reverse().join(""));
  if (str == rev_str) {
    console.log("Its Palindrome");
  } else {
    console.log(str);
    console.log(rev_str);
    console.log("Its not palindrome");
  }
};

palindrome_func("saas");
