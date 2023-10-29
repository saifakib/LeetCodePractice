/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        unordered_map<Node*, Node*> map;
        auto cHead =  head;

        while(cHead) {
            map[cHead] = new Node(cHead -> val);
            cHead = cHead -> next;
        }
        
        cHead = head;
        while(cHead) {
            map[cHead] -> next = map[cHead -> next];
            map[cHead] -> random = map[cHead -> random];
            cHead = cHead -> next;
        };

        return map[head];
    } 
};