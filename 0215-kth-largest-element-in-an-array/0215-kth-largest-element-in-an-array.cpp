// TC: 0(N)
// SC: 0(1)
class Solution {
private: 
    int create_partition(vector<int>& nums, int L, int R) {
        int i = L - 1;
        for (int j = L; j < R; j++) {
            if (nums[j] < nums[R]) {
                swap(nums[++i], nums[j]);
            }
        };
        swap(nums[i+1], nums[R]);
        return i + 1;
    }

    void partial_partition(vector<int>& nums, int k) {
        int L = 0;
        int R = nums.size() - 1;
        int threshold = 2 * log2(nums.size());
        while(L < R && threshold--) {
            int p = create_partition(nums, L, R);
            if (p < k) L = p + 1;
            else if (p > k) R = p - 1;
            else break;
        }
    }

    int findKthSmallet(vector<int>& nums, int k) {
        partial_partition(nums, k);
        return nums[k];
    }
public:
    int findKthLargest(vector<int>& nums, int k) {
        return findKthSmallet(nums, nums.size() - k);
    }
};