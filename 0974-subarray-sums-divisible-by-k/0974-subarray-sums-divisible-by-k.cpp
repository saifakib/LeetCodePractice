class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        vector<int> pSum(k + 1, 0);
        int sum = 0, cnt = 0;
        pSum[sum] = 1;
        for(int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            if(sum < 0) {
                int x = (k - 1 - sum / k);
                sum += x * k;
            };
            if(sum >= k) sum %= k;
            cnt += pSum[sum];
            pSum[sum]++;
        }
        return cnt;
    }
};