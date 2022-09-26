// what is union ?

// In TypeScript, we can define a variable which can have multiple types of values. In other words, TypeScript can combine one or two different types of data (i.e., number, string, etc.) in a single type, which is called a union type. Union types are a powerful way to express a variable with multiple types.

function combine(a : number | string , b:number | string){

    if(typeof a === "number" && typeof b ==="number" ){
        return a + b;
    }else{
        return a.toString() + b.toString()
    }
}

let ans = combine(5,5)
let ans1 = combine("hii" ,"sir")
let ans2 = combine("hii" ,1)

console.log(ans,ans1,ans2)
// 10 hiisir hii1