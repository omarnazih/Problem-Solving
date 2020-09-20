let nums = [2,7,11,15];
const target = 9;

function twoSum(nums, target) {
  const arrLength = nums.length;
  let res;
  for(let i = 0 ; i < arrLength ; i++){
    for(let j = 0 ; j < arrLength ; j++){
      if(nums[i] + nums[j] === target)
        res = i,j;
        console.log(res);
    }
  }
}

console.log(twoSum(nums,target));