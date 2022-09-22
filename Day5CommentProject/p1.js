
let {log} = console

// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 
for(let i = 1; i<= 5;i++){

     let bag = "";
    for(let j = 1; j<= 5; j++){
 bag += j +" "
    }
// log(bag)

}


// 5 4 3 2 1 
// 5 4 3 2 1 
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1

for(let i = 5; i> 0;i--){

    let bag = "";
   for(let j = 5; j>0; j--){
bag += j +" "
   }
log(bag)

}