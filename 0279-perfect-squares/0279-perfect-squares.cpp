// TC: O(n * root(n))
// MC: O(n)
class Solution {
public:
    vector<int> cache;
    int solver(int n) {
        if(n == 0) return 0;
        if(cache[n] != -1) return cache[n];
        int res = INT_MAX / 2;
        for(int i = 1; i*i <= n; i++) {
            res = min(res, 1 + solver(n - (i*i)));
        }
        return cache[n] = res;
    }
    int numSquaresRecursive(int &n) {
        cache.clear();
        cache.resize(n + 1, -1);
        return solver(n);
    }
    
    int numSquaresIterative(int &n) {
        vector<int> cache(n + 1, INT_MAX / 2);
        cache[0] = 0;
        for(int curr = 1; curr <= n; curr++) {
            for(int i = 1; i * i <= curr; i++) {
                cache[curr] = min(cache[curr], 1 + cache[curr - (i * i)]);
            }
        };
        return cache[n];
    }
    int numSquares(int n) {
       return numSquaresRecursive(n);
    }
};