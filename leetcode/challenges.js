const twoSum = function(nums, target) {
    answer =[]
    for(let i=0; i<nums.length; i++){
     for(let j= i+1; j<nums.length; j++){
         if(nums[i] + nums[j] == target){
             answer.push(i, j)
         }
     }
    }
    return answer
 };

 const isPalindrome = function(x) {
    str = x.toString()
    strArray = Array.from(str)
    reverseArray = strArray.reverse()
    reversedNumber = reverseArray.join('')
    if(x == reversedNumber){
        return true
    }
    else{
        return false
    }
};

 module.exports = {twoSum, isPalindrome}