// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(arr) {
    let j = 1;
    let n = arr.length-1;
    for(let i = 0; i<n ;i++){  // we run loop n time that why T.C O(n) 

         if(arr[i] != arr[i+1]){
            arr[j++] = arr[i+1]
            }
    }
      return j
    
};

//we run loop n time that why T.C O(n) 
// we are not use any extra space that why S.C O(1)