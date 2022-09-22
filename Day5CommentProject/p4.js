let {log} =  console;

// A 
// B A 
// C B A
// D C B A
// E D C B A
for(let i = 1 ;i<= 5; i++){
 let bag ="";
    for(let j = i; j>= 1;j--){
         bag += String.fromCharCode(j + 64)+" ";
    }
    // log(bag)
}

// A B C D E 
// A B C D 
// A B C
// A B
// A
for(let i = 1 ;i<= 5; i++){
    let bag ="";
       for(let j = 1; j <= 5 - i + 1;j++){
            bag += String.fromCharCode(j + 64)+" ";
       }
       log(bag)
   }