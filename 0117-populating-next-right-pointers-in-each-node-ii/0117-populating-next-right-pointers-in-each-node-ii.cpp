/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/
// TC: O(N)
// MC: O(N)
class Solution {
public:
    Node* connect(Node* root) {
        queue<Node*> Q;
        if(root) Q.push(root);
        
        while(!Q.empty()) {
            int levelSize = Q.size();
            for(int i = 0; i < levelSize; i++) {
                Node* node = Q.front(); Q.pop();
                
                if(node -> left) Q.push(node -> left);
                if(node -> right) Q.push(node -> right);
                if(i + 1 < levelSize) node -> next = Q.front();
            }
        }
        return root;
    }
};