/* Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ 
    Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
    Output : 39(4,2,10,23)
*/

const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// window size- 4

/* check for pattern 
    1, 4, 2, 10 -> sum
    4, 2, 10, 23 -> sum
    2, 10, 23, 3 -> sum
    10, 23, 3, 1 -> sum
    23, 3, 1, 0 -> sum
    3, 1, 0, 20 -> sum
*/


/*
brtute force
function findMaxSum(inputArray, k) {
  let maxSum = 0;
  // i will iterate upto to the index , where after it it still has four elements left in array
  // maths - array length - window size(k) <= i 
  for (let i = 0; i <= inputArray.length-k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += inputArray[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
*/
// console.log(findMaxSum(input,4))

/* optimisation ? -> 
there is group of element is new subarray sum whose sum 
already exist in last subarray sum 
*/

// old subarray sum(-1) and new subarray sum (+1)
function optimisedFindMaxSum(inputArray, k){
    let maxSum= 0;
    let firstWindowSum= 0;
   
    for(let i=k-1; i >=0; i-- ){
        firstWindowSum+=inputArray[i]
    }
    for(let i=1;i <= inputArray.length-k;i++){
        console.log(i,"Looped run times")
        console.log(inputArray[i-1],"To be subtract")
        console.log(inputArray[i+k-1], "To be Add")
        console.log(firstWindowSum, "Current Sum")
        console.log( "++++++++++")
        firstWindowSum=firstWindowSum-inputArray[i-1]+inputArray[i+k-1]
        if(firstWindowSum>maxSum){
            maxSum= firstWindowSum
        }
    }
    
   return maxSum
   
}

console.log(optimisedFindMaxSum(input,));
