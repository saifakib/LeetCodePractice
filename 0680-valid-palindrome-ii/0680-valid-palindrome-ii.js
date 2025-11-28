/**
 * @param {string} s
 * @return {boolean}
 */

function checkPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            const skipLeft = checkPalindrome(s, left + 1, right);
            const skipRight = checkPalindrome(s, left, right - 1);
            return skipLeft || skipRight;
        }
        left++;
        right--;
    }
    return true;
};
