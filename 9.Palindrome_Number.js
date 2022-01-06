/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(-2147483648 > x > 2147483647) return false;
    if(x < 0) return false;
	let preValue = x
    let temp = 0
    while(x > 0) {
        let remainder = parseInt(x%10)
        x = parseInt(x/10)
        temp = temp*10+remainder;
		console.log(temp)
    }
    if(temp == preValue) return true
    else return false
};

let x = 121
console.log(isPalindrome(x))