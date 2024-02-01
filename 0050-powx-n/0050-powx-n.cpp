// TC: 2log2(n) // logn

//f(x^n) = 
// (f(x^n/2))^2 if n is even;
// f(x^n-1)) if n is odd;
// 1 if n == 0;
class Solution {
public:
    double fast_expo(double x, long long n) {
        if(n == 0) return 1.0;
        if((n & 1) == 0) {
            double temp = fast_expo(x, n/2);
            return temp * temp;
        };
        return x * fast_expo(x, n-1);
    }
    double myPow(double x, int n) {
        int sign = 1;
        long long N = n;
        if(N < 0) {
            sign = -1;
            N = abs(N);
        }
        double res = fast_expo(x, N);
        return sign == -1 ? 1.0 / res : res;
    }
};