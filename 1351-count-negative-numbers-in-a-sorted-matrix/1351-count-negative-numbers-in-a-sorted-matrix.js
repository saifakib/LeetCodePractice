/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    //if(grid.length !== grid[0].length) return;
    let output = 0;
    grid.forEach((item) => {
        let length = item.filter((ele) => ele < 0).length;
        output += length;
    });
    return output;
};