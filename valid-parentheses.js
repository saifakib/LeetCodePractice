// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

/*
Idea:
    When we encounter an opening bracket, we will need its closing bracket in the nearest future.
    Therefore, we push a closing bracket of the same type into a stack.
    When we encounter a closing bracket, it should be equivalent to the popped bracket (on top of stack).
    Otherwise, the given string is invalid.
    At the end, the stack should be empty (all parentheses had its own pair)
*/

var isValid = function(s) {
    if( 1 >= s.length) return false
    let stack = []
    for(let a=0; a<s.length; a++){
        let brack = s.charAt(a)
        switch(brack) {
            case '(':
                stack.push(')')
                break
            case '{':
                stack.push('}')
                break
            case '[':
                stack.push(']')
                break
            default:
                if(brack !== stack.pop()) return false
        }
    }
    if(stack.length == 0){
        return true
    } else {
        return false
    }
};


