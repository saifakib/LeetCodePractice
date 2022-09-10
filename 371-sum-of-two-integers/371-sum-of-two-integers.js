/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    // for(let i=0; i<b; i++) {
    //     a++;
    // };
    
    while(b !== 0) {
        let carry = a & b;
        
        a = a ^ b;
        
        b = carry << 1;
    }
    
    return a;
};