/**
 * @param {string} num
 * @return {string}
 */
 var largestGoodInteger = function(num) {
    
    let i=0;
    let c=1;
    let output =[]
    let max = ""
    while(i<num.length)
        {
                if(num[i]==num[i+1] && num[i]==num[i+2])
                    {
                        if(num[i]>max)
                            {
                                max = num.slice(i,i+3)
                            }
                       // output.push(num.slice(i,i+3))
                    }
            i++;
                
            
        }
    console.log(output)
    return max
    
    
//     let output = ""
//     let array = []
//     console.log(typeof(num))
//     for(let i=0;i<num.length;i++)
//     {
//         output = output + num[i]
//         for(let j=i+1;j<=i+2;j++)
//             {
//                 if(num[i]==num[j])
//                 {
//                     output = output+num[j]
//                 }
//             }
//         console.log(output)
//         if(output.length==3)
//             {
//                 array.push(output)
//             }
//         output = ""
//     }
//     if(array.length==0)
//         {
//             return ""
//         }
//     else
//         {
//             array = array.sort((a,b)=>{
//         return b-a;
//     })
//     return array[0]   
//         }
    
};