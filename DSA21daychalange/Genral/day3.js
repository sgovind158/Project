// https://leetcode.com/problems/search-insert-position/submissions/
//  iterative way

var searchInsert = function (nums, target) {
  let n = nums.length - 1;
  let value;
  let ans = bs(nums, target, 0, n, value);
  return ans;
};


                               
function bs(arr, target, s, e, value) {
  while (s <= e) {
    let m = s + Math.floor((e - s) / 2);
                                          
    if (arr[m] == target) {
      return m;
    } else if (arr[m] < target) {
      s = m + 1;
      value = s;
      return bs(arr, target, s, e, value);
    } else {
      e = m - 1;
      value = m;
      return bs(arr, target, s, e, value);
    }
  }
  return value;
}

// T.C O(logn) and S.C O(1)
 // we are not use any extra space that why S.C O(1)
 // we are not run our loop n time  we run loop n / 2 time like(log n)
 // n = 10   10/2 = 5 ,5 /2 =2 , 2/2 = 1 and so on
  // n = 100  100/2 = 50 , 50/2 = 25 , 25/2 = 12 ,12 /2 = 6 ,// 6 /2 = 3 , 3 /2 = 1 (floor value) , ans so on

// recursive way
var searchInsert = function (nums, target) {
  let n = nums.length - 1;
  let value;
  let ans = bs(nums, target, 0, n, value);
  return ans;
};

function bs(arr, target, s, e, value) {
  if (s <= e) {
    let m = s + Math.floor((e - s) / 2);
    if (arr[m] == target) {
      return m;
    } else if (arr[m] < target) {
      s = m + 1;
      value = s;
      return bs(arr, target, s, e, value);
    } else {
      e = m - 1;
      value = m;
      return bs(arr, target, s, e, value);
    }
  }
  return value;
}
// serch




// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    let sc = 0;
     let count = 0;
    let value = 0;
    let n = s.length ;
    
    for(let i = 0; i<n;i++){// T.C O(n)S.C O(1)
        
        if(s[i] == " "&&sc==0){
            value = count ;
            count = 0;
            sc++
        }else{
            
            if(s[i] != " "){
                count++;
                sc = 0;
            }
        }
    }// loop end 
    
    if(count != 0 && sc > 0){
        return count 
    }
    else if(sc == 0){
        return count
    }
    else{
        return value
    }
    
};

// we are not use any extra space that why S.C O(1)
// we are loop n time that why T.C O(n)