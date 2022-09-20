
// 541326
let number =5967013 ;
let str = number.toString()
let {log} = console
let sum = 0;

let n = str.length;

for(let  i = 0; i<n;i++){

    sum += Number(str[i])
}

log(sum)

if(sum % 3 == 0){
    log("yes this is divisible by 3")
}else{
    log("it is not divible by 3 ")
}

