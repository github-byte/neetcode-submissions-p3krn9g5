class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    isNum(num) {
        return !Number.isNaN(num)
    }
    productExceptSelf(nums) {
        let leftProd = [];
        for(let i=0;i<nums.length;i++){
            if(i==0){
                leftProd[i] = 1;
            }
            else leftProd[i] = leftProd[i-1] * nums[i-1]
        }
        let rightProd = 1;
        for(let i=nums.length - 1;i>=0;i--){
            leftProd[i] = leftProd[i] * rightProd;
            rightProd *= nums[i]
        }
        return leftProd
    }
}
