
let {log} = console


// 1 1 1 1 1 
// 2 2 2 2 2 
// 3 3 3 3 3 
// 4 4 4 4 4 
// 5 5 5 5 5 
for(let i = 1; i<= 5;i++){

     let bag = "";
    for(let j = 1; j<= 5; j++){
 bag += i +" "
    }
// log(bag)

}

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

for(let i = 1; i<= 5;i++){

    let bag = "";
   for(let j = 1; j<= 5; j++){
bag += "*" +" "
   }
//  log(bag)

}

// A B C D E 
// A B C D E 
// A B C D E 
// A B C D E 
// A B C D E

for(let i = 1; i<= 5;i++){

    let bag = "";
   for(let j = 1; j<= 5; j++){
bag +=  String.fromCharCode(j + 64)+" "
   }
 log(bag)

}