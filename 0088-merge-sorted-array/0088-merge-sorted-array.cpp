// TC: O(N)
// SC: O(1)

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m + n - 1;
        int L = m - 1;
        int R = n - 1;

        while (R >= 0 && L >= 0) {
            if (nums1[L] >= nums2[R]) {
                nums1[i] = nums1[L];
                L--;
            } else {
                nums1[i] = nums2[R];
                R--;
            }
            i--;
        };

        while (R >= 0) {
            nums1[i] = nums2[R];
            R--;
            i--;
        }
    }
};