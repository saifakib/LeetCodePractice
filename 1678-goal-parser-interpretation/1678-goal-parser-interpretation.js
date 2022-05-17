/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al");  
};