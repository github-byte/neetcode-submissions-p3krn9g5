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
        const arr = Object.entries(obj).sort((a, b) => b[1] - a[1])
        return arr.map((item) => item[0]).slice(0, k)
    }
}
