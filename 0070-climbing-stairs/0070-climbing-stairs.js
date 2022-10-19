/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(1 <= n <= 45) {
        let arr = new Array();
        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 2;

        if(n > 2) {
            for(let i = 3; i <= n; i++) {
                arr[i] = arr[i-1] + arr[i-2]
            }
        }

        return arr[n];
    }
    
};


