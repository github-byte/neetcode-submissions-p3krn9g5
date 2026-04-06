class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        let ans = []

        for(let i=0;i<strs.length;i++){
            let freq = Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                freq[strs[i].charCodeAt(j) - 97] = (freq[strs[i].charCodeAt(j) - 97] || 0) + 1
            }
            const key = freq.join("#")
            if(!obj[key]){
                obj[key] = [i]
            }
            else {
                obj[key].push(i)
            }
        }
        Object.values(obj).forEach((item) => {
            let arr = item.map((elem) => strs[elem])
            ans.push(arr)
        })
        return ans;
    }
}
