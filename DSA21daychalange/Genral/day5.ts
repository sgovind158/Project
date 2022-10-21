//https://leetcode.com/problems/add-binary/submissions/
 var addBinary = function(a:string, b:string):string {
    let ans:string[]  = []; // extra space S.C O(n)
    let count:number = 0;
    let maxLength:number = Math.max(a.length,b.length) // T.C O(1)
    
    // reverse a and b
    let reverseA:string = "";
    let reverseB:string = "";
    
    let n:number = a.length - 1
    for(let i:number = n ; i>=0;i--){
        reverseA += a[i]
    }// alength time run 
    
    let m:number= b.length - 1
    for(let i =m; i>=0;i--){
        reverseB += b[i]
    }// blength  time run 
    
    
    for(let i = 0; i<maxLength;i++){  // max length ntime
      if( reverseA[i] === "1"){
          count++
      }
        if( reverseB[i] === "1"){
            count++
        }
        if(count == 2){
            ans.push("0")   // push T.C O(1)
            count = 1
        }else if(count == 3){
            ans.push("1")   // push T.C O(1)
            count = 1
        }
        else{
            
            if(count == 0){
                ans.push("0")
                count = 0;
            }else{
                ans.push("1")
                count = 0; 
            }
           
        }
    }  // loop end
    
    
    if(count != 0){
          ans.push(count.toString())
    }
  
    
    ans.reverse() // Time complexity: O(n). Space complexity: O(1)
    
    return ans.join("") // Time complexity: O(n). Space complexity: O(1)
};

let a:string = "1001"
let b:string = "1111"

let ans = addBinary(a,b)
console.log(ans)
//T.C O(n)
// S.C O(n)