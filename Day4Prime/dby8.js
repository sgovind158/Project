/// number = 639048458N find n it is divisible by n 

let str = "43200N";
let {log} = console
let str1 = "";
for(let i = 0; i<str.length;i++){
    if(str[i] != "N"){
        str1 += str[i]
    }
}


let str2 ="";

for(let i = str1.length - 1; i> str1.length - 3; i--){
 
    str2 += str1[i]
}

let str3 ="";

for(let i = str2.length-1 ; i>= 0; i--){
    str3 += str2[i]
}

let n = 1;

let str4 = str3 + n;


// log(Number(str4 % 8) == 0)
while(Number(str4 % 8) != 0){
   
    str4 = str3 + ++n;  
   
    if(n == 10)
    {
       n = 0;
    }

    
}

log("number of divisible by 8 is " ,n)




