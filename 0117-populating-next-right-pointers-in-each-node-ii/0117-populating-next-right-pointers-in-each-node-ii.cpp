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

class Solution {
public:
    Node* connect(Node* root) {
        if(root == nullptr) return nullptr;
        queue<Node*> Q;
        Q.push(root);
        
        while(!Q.empty()) {
            int levelSize = Q.size();
            for(int i = 0; i < levelSize; i++) {
                auto node = Q.front(); Q.pop();
                if(i + 1 < levelSize) node -> next = Q.front();
                if(node -> left) Q.push(node -> left);
                if(node -> right) Q.push(node -> right);
            }
        };
        return root;
    }
};