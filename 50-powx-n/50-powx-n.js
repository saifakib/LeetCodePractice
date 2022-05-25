/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    // Brute Force first while loop solution
//     let res = 1;
//     let count = 0;

//     while(count != n) {
//         if(n > count) {
//             res = res*x;
//             count++;
//         } else {
//             res = res/x;
//             count--;
//         }
//     }
    // return res;
    
    // Using javascript Exponentiation operator ( ** ) (ES2016) it working like pow() method
    // return x ** n;
    
    // recursive
    if( n == 0) return 1;
    if( n == 1) return x;
    if(n % 2 == 0) {
        return myPow(x * x, n / 2)
    }
    if( n < 0 ) {
        return 1 / myPow(x, Math.abs(n))
    }
    return x * myPow(x, n-1)
};