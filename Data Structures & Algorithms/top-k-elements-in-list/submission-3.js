class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        nums.forEach((item) => {
            obj[item] = (obj[item] || 0) + 1
        })
        let freqArr = new Array(nums.length + 1).fill().map(() => [])
        for(let i in obj){
            if(!Array.isArray(freqArr[obj[i]])){
                freqArr[obj[i]] = i;
            }
            else{
                freqArr[obj[i]].push(i)
            }
        }
        let result = [];
        for(let i = freqArr.length -1; i>=0; i--){
            if(freqArr[i].length > 0){
                result.push(...freqArr[i])
            }
        }
        return result.slice(0, k)
    }
}
