/** @format */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    var b = A.filter(function (item, pos, arr) {
        return pos === 0 || item !== arr[pos - 1];
    });
    A = b;
    n = A.length;
    if (A.length < 2) return 1;
    let c = 2;
    for (let i = 1; i <= n - 1; i++) {
        if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
            c++;
        } else if (A[i - 1] > A[i] && A[i + 1] > A[i]) {
            c++;
        }
    }
    return c;
}
