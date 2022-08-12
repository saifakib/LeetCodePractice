/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let maxContain = 0;    
    let i = 0;
    let j = height.length-1;
    
    while(i !== j) {
        let min = Math.min(height[i],height[j]);
        
        let presentContain = min * (j-i);
        if(presentContain > maxContain) {
            maxContain = presentContain;
        }
        if(height[i] > height[j]) {
            j--;
        } else {
            i++
        }
    }
    
    return maxContain;
    
};