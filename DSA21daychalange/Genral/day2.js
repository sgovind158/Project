// https://leetcode.com/problems/remove-element/submissions/

var removeElement = function(nums, val) {
    let n = nums.length;
    let j = 0;
    for(let i = 0; i<n;i++){  // we run loop n time that why T.C O(n)
        if(nums[i] != val){
            count++
            nums[j++] = nums[i]
        }
    }
    
    return j
};

// we run loop n time that why T.C O(n)
// we are not use any extra space that why S.C O(1)