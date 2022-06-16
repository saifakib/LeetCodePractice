/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const stringToObject = (str) => {
    return str.split("").reduce((acc, val) => {
        if(acc[val]) {
            acc[val]++
        } else {
            acc[val] = 1
        }
        return acc;
    }, {});
}

var canConstruct = function(ransomNote, magazine) {
    //return magazine.split(ransomNote).length > 1;
    let ransomHash = stringToObject(ransomNote);
    let magazineHash = stringToObject(magazine);
    
    let res = true;
    
    Object.keys(ransomHash).forEach((item) => {
        if(!magazineHash[item]) {
            res = false;
        }
        if(ransomHash[item] > magazineHash[item]){
            res = false;
        }
    })
    
    return res;
};