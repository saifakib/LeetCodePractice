// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int L = 0;
        int R = n;

        while(L < R) {
            int M = L + (R - L) / 2;
            if(isBadVersion(M)) {
                R = M;
            } else {
                L = M + 1;
            }
        };
        return L;
    }
};