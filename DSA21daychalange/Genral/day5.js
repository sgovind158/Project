//https://leetcode.com/problems/add-binary/submissions/
var addBinary = function (a, b) {
    var ans = []; // extra space S.C O(n)
    var count = 0;
    var maxLength = Math.max(a.length, b.length); // T.C O(1)
    // reverse a and b
    var reverseA = "";
    var reverseB = "";
    var n = a.length - 1;
    for (var i = n; i >= 0; i--) {
        reverseA += a[i];
    } // alength time run 
    var m = b.length - 1;
    for (var i = m; i >= 0; i--) {
        reverseB += b[i];
    } // blength  time run 
    for (var i = 0; i < maxLength; i++) { // max length ntime
        if (reverseA[i] === "1") {
            count++;
        }
        if (reverseB[i] === "1") {
            count++;
        }
        if (count == 2) {
            ans.push("0"); // push T.C O(1)
            count = 1;
        }
        else if (count == 3) {
            ans.push("1"); // push T.C O(1)
            count = 1;
        }
        else {
            if (count == 0) {
                ans.push("0");
                count = 0;
            }
            else {
                ans.push("1");
                count = 0;
            }
        }
    } // loop end
    if (count != 0) {
        ans.push(count.toString());
    }
    ans.reverse(); // Time complexity: O(n). Space complexity: O(1)
    return ans.join(""); // Time complexity: O(n). Space complexity: O(1)
};
var a = "1001";
var b = "1111";
var ans = addBinary(a, b);
console.log(ans);
//T.C O(n)
// S.C O(n)
