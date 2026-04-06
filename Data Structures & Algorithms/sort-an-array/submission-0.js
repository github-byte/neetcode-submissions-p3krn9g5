class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[j] < nums[i]){
                    let temp = null;
                    temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                }
            }
        }
        return nums;
    }
}
