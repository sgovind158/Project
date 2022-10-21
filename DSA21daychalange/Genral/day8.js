//https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9] //   output    -1  -3 -7   2  4 5 6 8 9 
let n = arr.length
 
let ans = arrengeNegative(arr,n)
console.log(ans)

function arrengeNegative(arr,n){
    let i  = -1;                  //  -1 -3 -7  4 5 6 2 8 9 
    let pivot = 0;            //ans     //  -1 -3  -7
                                // i =  2
                                // j = 9
      j = 0;
    while(j < n){  // n time   //   9< 9
                              //  9 < 0
                             //  a[2] = 2
                             //  a[6] = -3
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