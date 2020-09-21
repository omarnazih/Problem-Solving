let nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  const arrLength = nums.length;
  var res = [];  //initaite an array

  for (let i = 0; i < arrLength; i++) {
    for (let j = 1; j < arrLength - 0; j++) {
      if (i == j) {   //to avoid reaching target after summing with itself 
        j++;
      }
      
      if (nums[i] + nums[j] === target) {
        val1 = i;
        val2 = j;
        res.push(val1, val2);  //use push to populate array
        //end loop if target is reached
        i = arrLength;
        j = arrLength;
      }
    }
  }
  return res;  //return array
}

