class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    sortedChars(str) {
        let newArr = []
        let newStr = ''
        for(let i=0;i<str.length;i++){
            newArr.push(str.toLowerCase().charCodeAt(i) - 97)
        }
        newArr = newArr.sort((a,b) => a - b)
        newArr.forEach((item) => {
            newStr += String.fromCharCode(97 + item);
        })
        return newStr;
    }
    groupAnagrams(strs) {
        let obj = {}
        let ans = []
        for(let i=0;i<strs.length;i++){
            const sortedWord = this.sortedChars(strs[i])
            if(!obj[sortedWord]){
                obj[sortedWord] = [i]
            }
            else{
                obj[sortedWord].push(i)
            }
        }
        Object.values(obj).forEach((item) => {
            let arr = item.map((elem) => strs[elem])
            ans.push(arr)
        })
        return ans;
    }
}
