/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    
    const sizes = groupSizes.reduce((acc, val) => {
        if(acc[val]) {
            acc[val]++
        }else {
            acc[val] = 1
        }
        return acc;
    }, {});
    
    let output = Object.keys(sizes).reduce((acc, key) => {
        let indexs = groupSizes.reduce((acc, element, index) => {
            if(key == element) acc.push(index);
            return acc;
        }, []);
        
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