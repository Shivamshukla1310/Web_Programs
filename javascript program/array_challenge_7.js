/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(`${topCities} \n${hardCopyCities}`);