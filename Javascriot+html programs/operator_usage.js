let num1 = Number(prompt("Enter Number 1: "));
let num2 = Number(prompt("Enter Number 2: "));
let num3;
document.getElementById("no1").innerHTML =
  document.getElementById("no1").innerHTML + num1;
document.getElementById("no2").innerHTML =
  document.getElementById("no2").innerHTML + num2;
document.getElementById("add").innerHTML =
  document.getElementById("add").innerHTML + (num1 + num2);
document.getElementById("sub").innerHTML =
  document.getElementById("sub").innerHTML + (num1 - num2);
num3 = num1 * num2;
document.getElementById("mul").innerHTML =
  document.getElementById("mul").innerHTML + num3;
num3 = num1 / num2;
document.getElementById("div").innerHTML =
  document.getElementById("div").innerHTML + num3;
num3 = num1 % num2;
document.getElementById("mod").innerHTML =
  document.getElementById("mod").innerHTML + num3;
num3 = num1 ** num2;
document.getElementById("pow").innerHTML =
  document.getElementById("pow").innerHTML + num3;
