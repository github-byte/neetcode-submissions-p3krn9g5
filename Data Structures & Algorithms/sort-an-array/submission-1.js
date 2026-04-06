class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    mergeSortTwoSortedArrays(arr1, arr2){
        let i=0;
        let j=0;
        let mergedArr = [];
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] <= arr2[j]){
                mergedArr.push(arr1[i]);
                i++
            }
            else{
                mergedArr.push(arr2[j]);
                j++;
            }
        }

        if(i<arr1.length){
            while(i!=arr1.length){
                mergedArr.push(arr1[i])
                i++;
            }
        }
        else if(j<arr2.length){
            while(j!=arr2.length){
                mergedArr.push(arr2[j])
                j++;
            }
        }

        return mergedArr;
    }
    mergeSort(nums){
        if(nums.length == 0) return [];
        if(nums.length == 1){
            return [nums[0]]
        }
        let mid = nums.length/2;
        const left = this.mergeSort(nums.slice(0, mid));
        const right = this.mergeSort(nums.slice(mid, nums.length));
        return this.mergeSortTwoSortedArrays(left, right)
    }
    sortArray(nums) {
        let arr = this.mergeSort(nums);
        return arr;
    }
}
