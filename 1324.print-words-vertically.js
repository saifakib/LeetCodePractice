/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    const words = s.split(' ')
    const maxLen = Math.max(...words.map(word => word.length))
    
    let output = []
    
    for(let col = 0; col < maxLen; col++) {
        let string = ""
        
        for(let row = 0; row < words.length; row++) {
            const character = words[row].charAt(col);
            
            if(character == "") string += " "
            else string += character
            
        }
        output.push(string.trimEnd())
    }
    return output
};

printVertically("HOW ARE YOU")