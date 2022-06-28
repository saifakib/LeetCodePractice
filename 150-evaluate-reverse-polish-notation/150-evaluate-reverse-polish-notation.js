/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
    let stack = [];
    let first, sec;
    
    for(let i=0; i<tokens.length; i++) {
        switch(tokens[i]) {
            case '+':
                first = stack.pop();
                sec = stack.pop();
                stack.push(parseInt(sec) + parseInt(first));
                break;
                
            case '-':
                first = stack.pop();
                sec = stack.pop();
                stack.push(parseInt(sec) - parseInt(first));
                break;
            case '*':
                first = stack.pop();
                sec = stack.pop();
                stack.push(parseInt(sec) * parseInt(first));
                break;
            case '/':
                first = stack.pop();
                sec = stack.pop();
                stack.push(parseInt(sec) / parseInt(first));
                break;
            default: 
                stack.push(tokens[i]);
        }
    }
    return Math.floor(stack[0]);
}
// var evalRPN = function(tokens) {
//     let newArr = [];
//     let top = 0;
//     let calculation = 0;
    
//     for(let i = tokens.length-1; i >= 0; i--) {
//         newArr[top] = tokens[i];
//         top++;
//     } 
//     let holdArr = [];
//     while(top > 0) {
        
//         top--;
//         const element = newArr[top];
//         switch(element) {
//             case '+':
//                 calculation = parseInt(holdArr[0]) + parseInt(holdArr[1]);
//                 holdArr[0] = calculation;
//                 holdArr[1] = undefined;
//                 break;
                
//             case '-':
//                 calculation = parseInt(holdArr[0]) - parseInt(holdArr[1]);
//                 holdArr[0] = calculation;
//                 holdArr[1] = undefined;
//                 break;
//             case '*':
//                 calculation = parseInt(holdArr[0]) * parseInt(holdArr[1]);
//                 holdArr[0] = calculation;
//                 holdArr[1] = undefined;
//                 break;
//             case '/':
//                 calculation = parseInt(holdArr[0]) / parseInt(holdArr[1]);
//                 holdArr[0] = calculation;
//                 holdArr[1] = undefined;
//                 break;
//             default: 
//                 if(holdArr[0] == undefined) {
//                     holdArr[0] = element;
//                 } else {
//                     holdArr[1] = element;
//                 }
//         }
//     }
//     return calculation;
// };