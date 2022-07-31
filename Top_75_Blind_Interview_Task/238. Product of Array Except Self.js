/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let ans = []
    let porduct = 1
    for(let i=0;i<nums.length;i++)
        {
            for(let j=0;j<nums.length;j++)
            {
                if(i!=j)
                {
                    porduct = porduct * nums[j]
                    // console.log(porduct)
                }
            }
            ans.push(porduct)
            porduct = 1
        }
    
    return ans
};