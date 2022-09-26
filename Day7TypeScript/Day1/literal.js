// What is a literal in JavaScript?
// Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script.
// There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.
function combine(a, b, type) {
    if (type === "as-num") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
var ans = combine(5, 5, "as-num");
var ans1 = combine("hii", "sir", "as-string");
var ans2 = combine("hii", 1, "as-string");
console.log(ans, ans1, ans2);
// 10 hiisir hii1
