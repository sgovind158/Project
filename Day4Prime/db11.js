/// number = 639048458N find n it is divisible by n 

let str = "N780";
let {log} = console
let str1 = "";
let str2 ="";
for(let i = 0; i<str.length;i++){
    if( Number(i % 2 == 0)){
        str1 += str[i]
    }else{
        str2 += str[i]
    }
}

let sum1 = 0;
let sum2 = 0

for(let i = 1; i<str1.length;i++){
    sum1 += Number(str1[i])
}

for(let i = 0; i<str2.length;i++){
    sum2 += Number(str2[i])
}
let n = 0;
log(sum1,sum2)
let sum3 = sum1 - sum2;
let sum4 = sum3 + n;
log(sum3)

log(sum4)
while((sum4 % 11) != 0){
   
    sum4 = sum3 + ++n;  
    log(sum4)
   
    
}

log("number of divisible by 11 is " ,n)




// for(let i = str1.length - 1; i> str1.length - 3; i--){
 
//     str2 += str1[i]
// }

// let str3 ="";

// for(let i = str2.length-1 ; i>= 0; i--){
//     str3 += str2[i]
// }

// let n = 1;

// let str4 = str3 + n;


// // log(Number(str4 % 8) == 0)





