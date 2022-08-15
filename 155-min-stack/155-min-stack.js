
var MinStack = function() {
    this.arr = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    // if min array is empty
    if(this.min.length === 0) {
        this.min.push(val)
    } else {
    
        // else we have to store minimum value
        //for instance our stack was [-1, -0, -3]
        //push(-1) this.arr = [-1] | this.min = [-1]
        //push(0) this.arr = [-1, 0] | this.min = [-1, -1]
        //push(-3) this.arr = [-1,0,-3] | this.min = [-1,-1,-3]
        this.min.push(Math.min(this.min[this.min.length-1], val))
    }
    
    return this.arr[this.arr.length] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min.pop();
    return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */