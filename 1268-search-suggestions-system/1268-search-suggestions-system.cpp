//TC: O(N * P) // where N is the length of searchWord and P = T * X where T is the products size and X is avarage size od product
// MC: O(3 * N)
class Solution {
public:
    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        sort(products.begin(), products.end());
        vector<vector<string>> results;
        
        //populate
        string pref = "";
        for (auto &ch: searchWord) {
            pref.push_back(ch);
            vector<string> result;
            for (auto &product: products) {
                if (startWith(product, pref)) {
                    result.push_back(product);
                }
                if (result.size() == 3) break;
            };
            results.push_back(result);
        }
        return results;
    }
private:
    // TC: O(N * X) // N is length of pref and X for products
    bool startWith(string &product, string &pref) {
        if(product.size() < pref.size()) return false;
        for(int i = 0; i < pref.size(); i++) {
            if (product[i] != pref[i]) return false;
        };
        return true;
    }
};