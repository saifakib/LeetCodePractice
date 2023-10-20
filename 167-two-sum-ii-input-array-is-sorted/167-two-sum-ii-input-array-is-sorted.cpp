// TC: 0(N)
// SC: 0(1)
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int L = 0;
        int R = numbers.size() - 1;

        while(L < R) {
            if(numbers[L] + numbers[R] < target) L++;
            else if(numbers[L] + numbers[R] > target) R--;
            else {
                return { L + 1, R + 1 };
            }
        }
        return { -1, -1 };
    }
};
