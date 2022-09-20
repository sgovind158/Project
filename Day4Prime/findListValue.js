// find x least value it is divisible by 9

let a = 78532
let b = 5462

// 541326

let str1 = a.toString()
let str2 = b.toString()
let {log} = console
let sum1 = 0;

let n = str1.length;
let m = str2.length;

for(let  i = 0; i<n;i++){

    sum1 += Number(str1[i])
}

let sum2 = 0;
for(let  i = 0; i<m;i++){

    sum2 += Number(str2[i])
}

var x = 0;
let sum3 = sum1 + sum2;

while((sum3 + x) % 9 != 0){
   
    x++
}
if((sum3 + x) % 9 == 0){
    log("list value is ", x)
    log("original value ", sum3 + x)
}else{
    log("no ")
}

