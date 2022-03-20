
/**
 * Idea:
 * First check nums1 length is the equal of m+n
 * then take a loop who is working for nums1 size array
 * we also check both array m and n size, then taking the place who is bigger
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    if(nums1.length == m+n && nums2.length == n) {
        m--;
        n--;
        let i = nums1.length-1
        while(i >= 0) {
            if(nums1[m] >= nums2[n]) {
                nums1[i] = nums1[m]
                m--
            }
            else if(n > -1) {
                nums1[i] = nums2[n]
                n--
            }
            i--
        }
    }
    return nums1
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n))



