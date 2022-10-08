// var plusOne = function(digits:number[]):number[] {
//     let n:number = digits.length ;
//         for(let i = n-1 ; i>= 0; i--){
//     if(digits[i] != 9){
//         digits[i]++
//                 break
//             }else{
//                 digits[i] = 0;
//             }
//         }
//         if(digits[0] == 0){
//             let res:number[] = []
//             res.push(1)
//             for(let i = 0; i<n;i++){
//                 res.push(0)
//             }
//             return res 
//         }
//         return digits
//     };
//     var arr:number[] = [9,9,9,9]
//     var ans = plusOne(arr)
//     console.log(ans)
/// in the worst case our arr run n time that wht T.C O(n)  
// in the worst case we need extra arr that why our S.C O(n) 
//arr  best case T.C    [1,2,3,4] T.C.O(1)
//worst Case T.C     [9,9,9,9] T.C.O(n)
//   best case S.C      [1,2,3,4] T.C.O(1)
//  worst Case S.C    [9,9,9,9] T.C.O(n)
//   --------------------------------------------------//
// Two pointer tecnic 
// remove duplicate 
var removeDuplicate = function (arr, n) {
    var j = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j++] = arr[i];
        }
    } // loop end 
    arr[j] = arr[n - 1];
    return j;
};
var arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5];
var m = removeDuplicate(arr, arr.length);
for (var i = 0; i < m; i++) {
    console.log(arr[i]);
}
