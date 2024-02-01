// TC: O(logn)
// MC: O(1)
class Solution {
public:
    int trailingZeroes(int n) {
        int cnt = 0;
        int dw = 5;
        while(n >= dw) {
            cnt += n / dw;
            dw *= 5;
        };
        return cnt;
    }
};