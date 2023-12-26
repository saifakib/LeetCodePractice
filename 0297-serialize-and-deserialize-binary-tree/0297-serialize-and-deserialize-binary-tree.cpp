/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if(root == nullptr) return "#";
        return to_string(root -> val) + "," + serialize(root -> left) + "," + serialize(root -> right);
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        vector<string> seVec;
        stringstream ss(data);
        string token;
        while(getline(ss, token, ',')) {
            seVec.push_back(token);
        };
        queue<string> Q;
        for(auto i: seVec) Q.push(i);
        return BSTBuilder(Q);
    }
private:
    TreeNode* BSTBuilder(queue<string> &Q) {
        string value = Q.front(); Q.pop();
        if(value == "#") return nullptr;
        
        TreeNode* node = new TreeNode(stoi(value));
        node -> left = BSTBuilder(Q);
        node -> right = BSTBuilder(Q);
        return node;
    }
};

// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));