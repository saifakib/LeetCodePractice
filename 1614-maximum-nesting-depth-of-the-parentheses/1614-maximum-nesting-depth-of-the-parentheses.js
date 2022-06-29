/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let top = 0;
    let depth = top;
    let list = [];
    
    s.split("").forEach((item) => {
        if(item === "(") {
            list[top] = item;
            top++;
            if(top > depth) {
                depth = top;
            }
        }
        if(item === ")") {
            if(list[top-1] === "(") {
                list.pop();
                top--;
            };
        }
    })
    
    return depth;
};