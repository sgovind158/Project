
let {log} = console
// 1 
// 1 2       
// 1 2 3     
// 1 2 3 4   
// 1 2 3 4 5 
for(let i = 1; i<= 5;i++){

     let bag = "";
    for(let j = 1; j<= i; j++){
 bag += j +" "
    }
//  log(bag)

}




// 1 
// 2 2       
// 3 3 3     
// 4 4 4 4   
// 5 5 5 5 5 
for(let i = 1; i<= 5;i++){

    let bag = "";
   for(let j = 1; j<= i; j++){
bag += i +" "
   }
//  log(bag)

}


// 1 
// 2 2       
// 3 3 3     
// 4 4 4 4   
// 5 5 5 5 5 
for(let i = 1; i<= 5;i++){

    let bag = "";
   for(let j = 1; j<= i; j++){
bag += "*" +" "
   }
//  log(bag)

}


// A 
// A B   
// A B C 
// A B C D
// A B C D E

for(let i = 1; i<= 5;i++){

    let bag = "";
   for(let j = 1; j<= i; j++){
bag +=  String.fromCharCode(j + 64)+" "
   }
//  log(bag)

}

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1
for(let i = 5; i>0;i--){

    let bag = "";
   for(let j = 5; j>= i; j--){
bag += j +" "
   }
//   log(bag)

}


// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
for(let i = 1; i<=5;i++){

    let bag = "";
   for(let j = i; j>= 1; j--){
bag += j +" "
   }
//   log(bag)

}

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3   
// 1 2     
// 1
for(let i = 1; i<=5;i++){

    let bag = "";
   for(let j = 1; j <= 5 - i + 1; j++){
bag += j +" "
   }
//   log(bag)

}


// 1 2 3 4 5 
// 2 3 4 5 
// 3 4 5   
// 4 5     
// 5   
for(let i = 1; i<=5;i++){

    let bag = "";
   for(let j = i; j <= 5 ; j++){
bag += j +" "
   }
//    log(bag)

}



// 5 
// 5 4       
// 5 4 3     
// 5 4 3 2   
// 5 4 3 2 1 
for(let i = 5; i>=1;i--){

    let bag = "";
   for(let j = 5; j >= i ; j--){
bag += j +" "
   }
    log(bag)

}