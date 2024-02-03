// TC: O(1);
// MC: O(N);  // N is number of insert value
class RandomizedSet {
public:
    vector<int> ranSet;
    unordered_map<int, int> valIdx;
    RandomizedSet() {
        
    }
    
    bool insert(int val) {
        if(valIdx.count(val)) return false;
        valIdx[val] = ranSet.size();
        ranSet.push_back(val);
        return true;
    }
    
    bool remove(int val) {
        if(valIdx.count(val) == 0) return false;
        int index = valIdx[val];
        swap(ranSet[index], ranSet[ranSet.size() - 1]);
        ranSet.pop_back();
        valIdx[ranSet[index]] = valIdx[val];
        valIdx.erase(val);
        return true;
    }
    
    int getRandom() {
        return ranSet[rand() % ranSet.size()];
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */