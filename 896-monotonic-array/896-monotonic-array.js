/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
// 1st Attempt what acctually i think, but its not right
//     let chain = null;
//     let res = true;
    
//    for(let i=0; i<nums.length-2; i++) {
//        let diff = nums[i+1] - nums[i];
//        if(diff !== 0) {
//            if(chain == null) {
//                if(diff > 0) {
//                    chain = 'increasing'
//                } else {
//                    chain = 'decreasing'
//                }
//            } else {
//                if(diff > 0) {
//                    if(chain !== 'increasing') res = false;
//                } else {
//                    if(chain !== 'decreasing') res = false;
//                }
//            }
//        }
                                 
//    }

//     return res;
    
// 2nd Attempt i think works appropriately
    let increasing = true;
    let decreasing = true;
    
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] > nums[i]) {
            increasing = false;
        }
        if(nums[i-1] < nums[i]) {
            decreasing = false;
        }
    }
    
    
    return increasing || decreasing;
    
};