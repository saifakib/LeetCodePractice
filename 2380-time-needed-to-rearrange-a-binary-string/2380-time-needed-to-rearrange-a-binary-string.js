/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
    if(1 <= s.length && s.length <= 1000) {
        let exit = true;
        let count = 0;
        while(exit === true) {
            let len = s.split("01").length;
            if(len > 1) {
                s = s.split("01").join("10");
                count++;
            } else {
                exit = false;
            }
        }
        return count;
    }
};