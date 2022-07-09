/**
 * @param {string[]} words
 * @return {number}
 */

function* generator() {
    let start = 97;
    while(start <= 122) {
        yield String.fromCharCode(start);
        start++;
    }
}

var gen = generator();

var uniqueMorseRepresentations = function(words) {
    
        let dotDashes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    // First Approach
    
//     let chatMapTo = dotDashes.reduce((acc, val) => {
//         acc[gen.next().value] = val;
//         return acc;
//     }, {});
    
//     let wrodsMap = words.reduce((acc, val) => {
//         let splitWord = val.split("");
//         let maps = splitWord.reduce((ac, va) => {
//             ac.push(chatMapTo[va]);
//             return ac;
//         }, []);
//         maps = maps.join("");
//         if(acc[maps]) {
//             acc[maps]++;
//         } else {
//             acc[maps] = 1;
//         }
//         return acc;
//     }, {});
    
//     let diffrent = Object.keys(wrodsMap).length;
//     return diffrent;
    
    let transformations = new Set();
    
    for(let word of words) {
        let trans = "";
        for(let letter of word) {
            let index = letter.charCodeAt(0) - 97;
            trans += dotDashes[index];
        }
        
        transformations.add(trans);
    }
    
    return transformations.size;
    
};