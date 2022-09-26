// What is use of tuple in TypeScript?
// A tuple is a typed array with a pre-defined length and types for each index. Tuples are great because they allow each element in the array to be a known type of value.
// What is a tuple vs array?
// Tuples have a slight performance improvement to lists and can be used as indices to dictionaries. Arrays only store values of similar data types and are better at processing many values quickly.
var role = ["govind", "nikita", "vinod", 30, true];
role.push(false);
role[1] = "hellow";
console.log(role);
