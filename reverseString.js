/*
 * Reverse Any String value 
 */

function reverseString(string) {
    if (typeof string === 'string') {

        /* trick One */
        // return string.split("").reverse().join("")

        /* trick two */
        // let result = ""
        // for(let char of string) {
        //     result = char + result
        // }
        // return result;

        /* trick three */
        return string.split("").reduce((result, char) =>  char + result , "")
        
    } else {
        throw new Error('Should be passes a String Value')
    }
}

try{
    console.log(reverseString("bikA fiaS"))
} catch(error) {
    console.log(error.message)
}