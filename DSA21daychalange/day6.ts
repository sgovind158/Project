// https://leetcode.com/problems/sqrtx/submissions/

// var mySqrt = function(x:number) {
    
//     let  y:number = 0; 
    
//     while(y * y <= x){ // T.C  O(root x) // S.C O(1)
//         y++
//     }
    
//     return y - 1
// };

// var x:number = 64;
//console.log(mySqrt(x))
// T.C  O(root x) // S.C O(1)



///Binary search apporch 

var mySqrt = function(x:number):number {
    
 let   s:number = 0;
  let    e:number= x;
  let    ans:number  = 0;
      
      while(s<=e){
          let m:number  = s + Math.floor((e - s)/2)
          if(m * m <= x){
              ans = m;
              s = m + 1;
          }else{
              e = m - 1;
          }
      }
      
      return ans 
  };


 var x:number = 64;
console.log(mySqrt(x))
//T.C O(log2 rootx)