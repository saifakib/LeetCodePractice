/*
* Character Related Solution
*/

// Count character string
const createCharMap = (string) => {
    let charMap = {}
    for( let char of string.replace(/[^\w]/g, '') ) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    return charMap;
}

// Return hiegst counted character from string
const hiegstChar = (string) => {
    const charMap = createCharMap(string);
    let max = 0;
    let character;
    for(let char in charMap) {
        if(charMap[char] > max) {       // given which are come in fast, if multifle charcter has same value
            max = charMap[char]
            character = char
        }
    }
    return character;
}


// Anagram 
const anagram = (firstString, secondString) => {
    const charMapFirst = createCharMap(firstString)
    const charMapSecond = createCharMap(secondString)

    if(Object.keys(charMapFirst).length !== Object.keys(charMapSecond).length){
        return false;
    } else {
        for( let ch in charMapFirst) {
            if(charMapFirst[ch] !== charMapSecond[ch]) {
                return false
            } else {
                return true
            }
        }
    }
}


// Repeted Character Check
const hasRepetChar = (string) => {
    const charMap = createCharMap(string)
    for(let char in charMap) {
        if(charMap[char] > 1 ) {
            return true
        }
    }
    return false
}


// Capitalization first Character
const capitalization = (sentence) => {
    let result = []
    for(let word of sentence.split(" ")) {
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return result.join(" ");
}


console.log(capitalization("saif akib dev"))