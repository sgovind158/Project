//https://leetcode.com/problems/climbing-stairs/submissions/

// normal way T.C 2 < 2 ^ n like n = 4 so T.C = 16    4 = 2 * 2 * 2 * 2  = 16;  
//We are not using any extra space that why S.C = O(1)
// var climbStairs = function(n) { 
//     if(n == 0){
//         return 1
//     }
//     else if(n < 0){
//         return 0
//     }else{
//        let cs1 = climbStairs(n-1); 
//         let cs2 = climbStairs(n-2);
//         let cs = cs1 + cs2 
        
//         return cs
//     }
    
   
//  };
 




/// optimize way T.C = O(n) ans S.C(n)

 var climbStairs = function(n:number) { 
    
    let qb = new Array(n  + 1).fill(0)  // extra space 
    // for(let i = 0; i<qb.length;i++){
    //     qb.push(0)
    // }
    let ans = ways(n,qb)
    return ans
 };
 
 function ways(n:number,qb):number{
     
      if(n == 0){
         return 1
     }
     else if(n < 0){
         return 0
     }else if(qb[n]!= 0){
         return qb[n];
     }else{
        let cs1 = ways(n-1,qb);
         let cs2 = ways(n-2,qb);
         let cs = cs1 + cs2 
          qb[n] = cs
         return cs
     }
 }

 let n:number = 3;
let ans:number = climbStairs(n)
console.log(ans)