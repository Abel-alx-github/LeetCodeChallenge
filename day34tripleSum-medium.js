/**
Medium
Description:
Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
*/

// type TList = number[][]
// const nums = process.argv[2].slice(1,process.argv[2].length - 1)
const tripleSum = (nums) => {
    // console.log(nums)
    const res = [];
 
    nums.sort((a, b) => a - b )
    

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
     while(left < right){
        let sum = nums[i] + nums[left] + nums[right];

        if(sum === 0){
            res.push([nums[i], nums[left], nums[right]]);
            console.log(res)

            while(left < right && nums[left] === nums[left +1] ){
                left++;
            }
            while(left < right && nums[right] === nums[right - 1]){
                right--;
            }

            left++;
            right--;
        } else if (sum > 0){
            right--;
        }else{
            left++;
        }
    }

    }

    return res
}

tripleSum([ -4, -1, -1, 0, 1, 2 ])

function findTriples(nums) {
    const res = [];
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Iterate over nums
    for (let i = 0; i < nums.length; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
}

// console.log(findTriples([ -4, -1, -1, 0, 1, 2 ]))