// what is union ?
// In TypeScript, we can define a variable which can have multiple types of values. In other words, TypeScript can combine one or two different types of data (i.e., number, string, etc.) in a single type, which is called a union type. Union types are a powerful way to express a variable with multiple types.
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
var ans = combine(5, 5);
var ans1 = combine("hii", "sir");
var ans2 = combine("hii", 1);
console.log(ans, ans1, ans2);
