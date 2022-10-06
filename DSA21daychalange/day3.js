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
