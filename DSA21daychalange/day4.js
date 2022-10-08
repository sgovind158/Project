var plusOne = function (digits) {
    var n = digits.length;
    for (var i = n - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i]++;
            break;
        }
        else {
            digits[i] = 0;
        }
    }
    if (digits[0] == 0) {
        var res = [];
        res.push(1);
        for (var i = 0; i < n; i++) {
            res.push(0);
        }
        return res;
    }
    return digits;
};
var arr = [9, 9, 9, 9];
var ans = plusOne(arr);
console.log(ans);
