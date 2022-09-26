// What does void mean in TypeScript?
// no return value
// According to the TypeScript docs: void represents the return value of functions which don't return a value. Whenever you see a function returning void , you are explicitly told there is no return value. All functions with no return value have an inferred return type of void .


function add():void{
    console.log("hello")
}