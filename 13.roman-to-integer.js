/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let q = s.split("").map(m => roman[m])
	return q.reduceRight((tot, cv, ci, arr) => ( cv < arr[ci + 1] ) ? tot-cv : tot+cv)
};

let s = "LVIII"
console.log(romanToInt(s))