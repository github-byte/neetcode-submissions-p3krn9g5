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
        
        let full = strLen;
        let str = ''
        while(full >= 0){
            let outer = strs[0].substring(0, full)
            for(let j=1;j<strs.length;j++){
                if(outer == strs[j].slice(0, full)){
                    str = outer
                    if(j == strs.length -1 ){
                        return str;
                    }
                }
                else{
                    break;
                }
            }
            full--;
        }
        return str
    }
}
