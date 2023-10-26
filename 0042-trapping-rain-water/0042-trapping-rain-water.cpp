// TC: 0(N)
// SC: 0(1)
class Solution {
public:
    int trap(vector<int>& height) {
        if(height.size() < 2) return 0;

        int maxLeft = height[0];
        int maxRight = height[height.size() - 1];

        int currLI =  1;
        int currRI = height.size() - 2;

        int trapW = 0;

        while(currLI <= currRI) {
            if(maxLeft < maxRight) {
                if(maxLeft <= height[currLI]) { 
                    maxLeft = height[currLI];
                }
                trapW += maxLeft - height[currLI];
                currLI++;
            }
            else {
                if(height[currRI] >= maxRight) { 
                    maxRight = height[currRI];
                }
                trapW += maxRight - height[currRI];
                currRI--;
            }
        }
        return trapW;
    }
};