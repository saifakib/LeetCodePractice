/*
// Definition for Employee.
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};
*/

class Solution {
private: 
    int dfs(map<int, Employee*>& maps, int id) {
        int value = maps[id]->importance;
        for(auto sub: maps[id]->subordinates) {
            value += dfs(maps, sub);
        }
        return value;
    }
public:
    int getImportance(vector<Employee*> employees, int id) {
        map<int, Employee*> store;
        for(auto emp: employees) {
            store[emp->id] = emp;
        }
        return dfs(store, id);
    }
};