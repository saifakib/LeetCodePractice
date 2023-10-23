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
// TC: 0(N)
// SC: 0(N)
class Solution {
public:
    Node* connect(Node* root) {
        queue<Node*> que;

        if(root) que.push(root);

        while(!que.empty()) {
            int level_size = que.size();
            for(int i = 0; i < level_size; i++) {
                Node* node = que.front();
                que.pop();

                if(i + 1 < level_size) node -> next = que.front();
                if(node -> left) que.push(node -> left);
                if(node -> right) que.push(node -> right);
            }
        }

        return root;
    }
};