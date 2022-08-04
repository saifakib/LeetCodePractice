/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let store = {};
    
    // if(nums.length < 2) {
    //     return nums;
    // }
    
    
    nums.forEach((item) => {
        if(store[item]) {
            store[item]++;
        }
        else {
            store[item] = 1
        }
    });

    let keys = Object.keys(store);
    let valueStore = keys.reduce((acc, val) => {
        if(acc[store[val]]) {
            acc[store[val]].push(val)
        } else {
            acc[store[val]] = [val];
        }
        return acc;
    }, {});
    
    let sorted = Object.values(valueStore).sort((a,b) => b-a);
    
    let output = [];
    
    let result = Object.entries(store).sort((a,b) => b[1]-a[1]);
    for(let i=0; i<result.length; i++) {
        if(k == 0) return output;
        if(k > 0) {
            output.push(result[i][0]);
            k--;
        }
    }
    // sorted.forEach((item) => {
    //     if(valueStore[item].length < k) {
    //         output = output.concat(valueStore[item]);
    //         k -= valueStore[item].length
    //     }
    // })
    
    // return output;
    
    // for (const key of Object.keys(store)) {
    //     if(k == 0) {
    //         return output;
    //     }
    //     if(store[key] == sorted[i]) {
    //         output.push(key);
    //         k--;
    //         i++;
    //     }
    // }
    
    
//     let sorted = Object.values(valueStore).sort((a,b) => b-a);
//     console.log(sorted);
    
//     let output = [];
    
//     let i=0;
//     for (const key of Object.keys(store)) {
//         if(k == 0) {
//             return output;
//         }
//         if(store[key] == sorted[i]) {
//             output.push(key);
//             k--;
//             i++;
//         }
//     }
    return output;
};