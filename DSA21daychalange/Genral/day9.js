// let myFunction = (a, b) => a * b;

// console.log(myFunction(5,5))

// // Before Arrow:
// hello = function() {
//   return "Hello World!";
// }

// const hello1 = ()=>"hellow world"

// console.log(hello1(5,5))


// let obj = {
//    name: "govind",

//    getNameFun:function(){
//     console.log(`my name is ${this.name}`)
//    }

//    ,
//    getNameArrowFun:()=>{
//     console.log(`my name is ${this}`)
//    }

// }
// const name ="vinit"
// let {log} = console 

// log(obj)
// obj.getNameFun()
// obj.getNameArrowFun()

// const showName = ()=>{
//     console.log(this)
// }

// showName()


//Arrow function in javaScript 

// function printName(){
//     console.log("my name is govind ")
//     return "govind"
// }

// printName()

// let printName1 = age=>console.log("my name is govind1 ",age)
 


// printName1(22)

let obj = {
    name : "Govind Sahu",
    printName:function(){
        console.log(this.name)
    },
    printNameArrowFun : ()=>{
        console.log(this.name)
    }
}

console.log(obj)
obj.printName()
obj.printNameArrowFun()

