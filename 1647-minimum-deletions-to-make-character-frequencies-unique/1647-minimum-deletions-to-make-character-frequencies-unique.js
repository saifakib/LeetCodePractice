/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    
    let hashObj = s.split("").reduce((acc, val) => {
        if(acc[val]) {
            acc[val]++;
        } else {
            acc[val] = 1;
        }
        return acc;
    }, {});

    let sorted = Object.entries(hashObj).sort((a,b)=> b[1] - a[1]);
    
    let count = 0;
    let stay = sorted[0][1];
    
    for(let i=1; i<sorted.length; i++) {
        if(stay == 0) {
            count += sorted[i][1];
        } else {
            if(sorted[i][1] >= stay) {
            stay = stay - 1;
            let diff = sorted[i][1] - stay;
            count += diff;
            } else {
                stay = sorted[i][1];
            }
        }
    }
    
    return count;
    
    
};