// TC: O(n * root(n))
// MC: O(n)
class Solution {
public:
    int numSquares(int n) {
        // Iterative way
        vector<int> cache(n + 1, INT_MAX / 2);
        cache[0] = 0;
        for(int curr = 1; curr <= n; curr++) {
            for(int i = 1; i * i <= curr; i++) {
                cache[curr] = min(cache[curr], 1 + cache[curr - (i * i)]);
            }
        };
        return cache[n];
    }
};