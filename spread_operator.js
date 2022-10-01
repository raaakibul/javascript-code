// spread operator
// ... (three dots)
let poorCountry = ["Pakistan", "Bangladesh","India"] 
let richCountry = [...poorCountry,"America", "Canada", "England"]

console.log(richCountry);

// without spread operator

var Country1 = ["Pakistan", "Bangladesh","India"] 
var Country2 = ["America", "Canada", "England"]

Country2.push(Country1)
console.log(Country2);
