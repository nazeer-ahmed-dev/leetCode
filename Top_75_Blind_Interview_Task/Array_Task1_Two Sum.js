/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    let list = []
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
            {
                if(i==j)
                    {

                    }
                    else
                    {
                        if(nums[i]+nums[j]==target)
                        {
                            list.push(i)
                            list.push(j)
                            return list
                        }
                    }
            }
    }
    
    return list

}