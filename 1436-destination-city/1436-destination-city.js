/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    // Hash all paths from paths array, Here a path city without any path outgoing to another city;
    let hashpaths = paths.reduce((acc, ways) => {
        acc[ways[0]] = ways[1];
        return acc;
    }, {});
    
    // All object values also a key without one, we need to find that which value is not a key;
    // Filter the object values ans its an array which length is one ans the only element to our finding city
    let arr = Object.values(hashpaths).filter((ele) => !Object.keys(hashpaths).includes(ele));
    return arr[0];
    
};