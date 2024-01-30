class Solution {
public:
    int countPrimes(int n) {
        vector<bool> mark(n + 1, false);
        for(long long int i = 2; i < n; i += 2) {
            mark[i] = true;
        }
        for(long long int i = 3; i <= n; i += 2) {
            if(mark[i] == false) {
                for(long long int j = i*i; j <= n; j += i) {
                    mark[j] = true;
                }
            }
        };
        int count = n > 2 ? 1 : 0;
        for (long long int i = 3; i < n; i += 2) {
            count += !mark[i];
        }

        return count;
    }
};