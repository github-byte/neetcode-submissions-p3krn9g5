class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        for(let j=1;j<strs.length;j++){
            while(!strs[j].startsWith(prefix)){
                prefix = prefix.slice(0, -1)
            }
        }
        return prefix;
    }
}
