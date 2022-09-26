// What is type alias in TypeScript?
// In Typescript, Type aliases give a type a new name. They are similar to interfaces in that they can be used to name primitives and any other kinds that you'd have to define by hand otherwise. Aliasing doesn't truly create a new type; instead, it gives that type a new name.

// What are type aliases in JavaScript?
// A type alias is basically a name for any type. Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections.


type varType = number|string|boolean|number[];


let a : varType = 10;
let b : varType = "hellow"
let c : varType = false;

let d : varType = [1,2]

console.log(a,b,c,d)
// 10 hellow false [ 1, 2 ]