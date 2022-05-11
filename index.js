let a = "Elzero Web School";

//include this Methods in Your Solution [slice , caherAt];
//Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// console.log(a.charAt(2).toUpperCase());


// Return H 8 Times 
console.log(a.substr(-4, 1).toUpperCase().repeat(8));

//Return Array
console.log(a.split(" ").slice(0, 1));

//Use only subStr method + template literals in ypue solution.
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`)

// return first ,last character with lower case.
console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length - 1) + a.slice(-1).toLowerCase())