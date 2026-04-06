class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length == 1) return strs[0];
        let strLen = Number.MAX_SAFE_INTEGER;
        for(let i=0;i<strs.length;i++){
            strLen = Math.min(strLen, strs[i].length)
        }
        
        while(strLen >= 0){
            let prefix = strs[0].substring(0, strLen)
            let isMatch = true
            for(let j=1;j<strs.length;j++){
                if(prefix !== strs[j].substring(0, strLen)){
                    isMatch = false;
                    break;
                }
            }
            if(isMatch) return prefix;
            strLen--;
        }
        return prefix;
    }
}
