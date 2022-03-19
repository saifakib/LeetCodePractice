

/**
 * @Idea
 * First find the target value from this arrat using Binary Search and their character code.
 * Then if its found then return next letters because here array is sorted in non-decreasing order
 * if not then return the first character from array
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    // let i = 0
    // for(let i = 0; i<letters.length; i++) {
    //     if(target.charCodeAt(0) < letters[i].charCodeAt(0)) return letters[i]
    // }
    // return letters[0]
    
    let left=0
    let right=letters.length-1
    while(left<right) {
        let mid = Math.floor((left+right)/2)
        if(target.charCodeAt(0) == letters[mid].charCodeAt(0)) {
            return letters[mid+1]
        }
        else if(target.charCodeAt(0) < letters[mid].charCodeAt(0)) {
            right=mid-1
            mid=Math.floor((left+right)/2)
        }
        else{
            left=mid+1
            mid=Math.floor((left+right)/2)
        }
    }
    return letters[0]
};

const letters = ["c","f","j"], target = "h"
console.log(nextGreatestLetter(letters, target))


