/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// Needed to extra variable i & j, when i traverse a word at the end
// function(word, s, m, n, i, j)
var isSubsequence = function(word, s, m, n) {
// When traversing a word from start
    if(m === 0) {
        return true;
    }
    if( n === 0 ) {
        return false;
    }
    
    if(word[m-1] === s[n-1]) {
        return isSubsequence(word, s, m-1, n-1);
    }
    
    return isSubsequence(word, s, m, n-1);
    
// OR    
    
//     if(i === m) {
//         return true;
//     }
//     if(j === n) {
//         return false;
//     }
    
    
//     if(word[i] === s[j]) {
//         return isSubsequence(word, s, m, n, i+1, j+1)
//     }
//     return isSubsequence(word, s, m, n, i, j+1)
}

var numMatchingSubseq = function(s, words) {
    
    let wordsCount = words.reduce((acc, word) => {
        acc.set(word, (acc.get(word) ?? 0) + 1)
        return acc;
    }, new Map());
    
    return Array.from(new Set(words)).reduce((count, word) => {
        return count + (isSubsequence(word, s, word.length, s.length) ? wordsCount.get(word) : 0);
    }, 0);
    
    
//     let count = 0;
//     let sLen = s.length;
//     let set = new Set();
    
//     words.forEach((word) => {
//         let wordLen = word.length;
//         // if i want to try it on the last of word
//         if(set.has(word)) {
//             count++
//         } else {
//             let res =isSubsequence(word, s, wordLen, sLen);
        
//             //OR
//             //if first
//             // let res = isSubsequence(word, s, wordLen, sLen, 0, 0);

//             if(res){
//                 count++;
//                 set.add(word);
//             } 
//         }
//     })
    
//     return count;
};