/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    
    // Here sizes return an object like if groupSizes is [2,2,1,1,1,1,1,1], then we sholud find the object is { 2: 2, 1: 6}
    const sizes = groupSizes.reduce((acc, val) => {
        if(acc[val]) {
            acc[val]++
        }else {
            acc[val] = 1
        }
        return acc;
    }, {});
    
    let output = Object.keys(sizes).reduce((acc, key) => {
        //find individual key values array
        let indexs = groupSizes.reduce((acc, element, index) => {
            if(key == element) acc.push(index);
            return acc;
        }, []);
        
        // break down the array by their key number
        let start = 0;
        let end = parseInt(key);
        while(end <= indexs.length) {
            let sliceGroup = indexs.slice(start, end);
            acc.push(sliceGroup)
            start = end;
            end += parseInt(key);
        }
        return acc;
    }, []);
    
    return output;
};
