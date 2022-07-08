/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let list1Hash = list1.reduce((acc, resturant, index) => {
        acc[resturant] = index+1;
        return acc;
    }, {});
    
    let least = (list1.length-1) + (list2.length-1);
    let hold = [];
    
    list2.forEach((resturant, index) => {
        if(list1Hash[resturant]) {
            if((list1Hash[resturant]-1 + index) < least) {
                least = (list1Hash[resturant]-1) + index;
                hold = [resturant];
            }
            else if((list1Hash[resturant]-1 + index) == least) {
                least = (list1Hash[resturant]-1) + index;
                hold.push(resturant);
            }
        }
    });
    
    return hold;
};