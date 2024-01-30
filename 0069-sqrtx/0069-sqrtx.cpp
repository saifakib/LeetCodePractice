class Solution {
public:
    int mySqrt(int x) {
        int rootValue = 0;
        for(unsigned int i = 1; i*i <= x; i++) {
            rootValue = i;
        };
        return rootValue;
    }
};