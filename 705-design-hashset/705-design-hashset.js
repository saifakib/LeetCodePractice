
var MyHashSet = function() {
    this.hashtbl = new Set();
    this.hasht = {};
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.hashtbl.add(key);
    this[key] = null;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.hashtbl.delete(key)
    delete this[key]
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hashtbl.has(key)
    return this.hasOwnProperty(key)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */