let str = prompt("Enter String: ");
let chr = prompt("Enter Character1: ");
let chr1 = str.charAt(0);
let chr2 = str.charAt(length - 1);
document.getElementById("str_1").innerHTML = " String: " + str;
document.getElementById("chr_1").innerHTML = " Character: " + chr;
if (chr == chr1 && chr == chr2) {
  document.getElementById("res").innerHTML =
    " String begins and ends with " + chr;
} else if (chr == chr1 && chr != chr2) {
  document.getElementById("res").innerHTML = " String begins with " + chr;
} else if (chr != chr1 && chr == chr2) {
  document.getElementById("res").innerHTML = " String Ends with " + chr;
} else if (chr != chr1 && chr != chr2) {
  document.getElementById("res").innerHTML =
    " String dosen't begins nor ends with " + chr;
}
