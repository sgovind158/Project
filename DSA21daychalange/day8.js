//https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9]
let n = arr.length

let ans = arrengeNegative(arr,n)
console.log(ans)

function arrengeNegative(arr,n){
    let i  = -1; 
    let pivot = 0; 
    
      j = 0;
    while(j < n){  // n time 
       
       if(arr[j]<pivot){
           i++
           swap(arr,i,j)
       }
       j++
        
    }// while loop 
    
    return arr
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
     arr[j] = temp;
}  

//T.C O(n)
//S.C O(1)