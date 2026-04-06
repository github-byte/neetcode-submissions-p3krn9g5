class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let i=0;i<strs.length;i++){
            let freq = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                freq[strs[i].charCodeAt(j) - 97]++;
            }
            const key = freq.join("#")
            if(!obj[key]){
                obj[key] = [strs[i]]
            }
            else obj[key].push(strs[i])
            
        }
        return Object.values(obj);
    }
}
