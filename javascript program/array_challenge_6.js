/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let copyOfOgTea = popularTeas
popularTeas.pop();
console.log(`${popularTeas} \n ${copyOfOgTea}`);