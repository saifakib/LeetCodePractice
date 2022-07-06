/**
 * @param {number} n
 * @return {number}
 */

var generate = function*() {
    let [a,b] = [0,1];
    while(true) {
        yield a;
        [a,b] = [b,a+b]
    }
}

var memo = {}

var fib = function(n) {
    
// Approach 1
//     if(n === 0) return 0;
//     if(n === 1) return 1;
    
//     let n1 = 0;
//     let n2 = 1;
//     let sum = 0;
    
//     for(let i=n; i>=2; i--) {
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//     }
    
//     return sum;
    
    // Approach 2 good
    // let gen = generate();
    // while(n--) {
    //     gen.next();
    // }
    // return gen.next().value;
    
    // Best Approach
    if(memo[n]) return memo[n];
    if(n === 1 || n === 0) return n;
    return memo[n] = fib(n-1) + fib(n-2);
    
};