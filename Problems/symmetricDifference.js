/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in 
   either of the two sets but not in both. 
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}. 
Symmetric difference is a binary operation, which means it operates on only two elements.

-Symmetric Difference basically contains all elements of two arrays except common elements. 
*/

function sym(args) {
    let  argsIn = [...arguments];
    let res = [];
    if(argsIn.length < 1) {
      throw new Error('Please enter one array');
    }
    for(let i=0;  i< argsIn.length;){
      if(i===0){
        res=symDifference(argsIn[i],argsIn[i+1]);
        i+=2
      } else {
      res=symDifference(res,argsIn[i])
        i++
      }
    }
    return res;
}
function symDifference(input1, input2) {
    let symRes = [];
    let maxInput = [...input1];
    let minInput = [...input2];
  
    if (input1.length < input2.length) {
      maxInput = [...input2];
      minInput = [...input1];
    }
    //right to left and left to right comparison 
    symRes = [...getSymDifference(maxInput,minInput), ...getSymDifference(minInput,maxInput)]
    return symRes.sort() // todo
  
}

function getSymDifference(input1,input2){
      let resArr = [];

    // use of for loop
    for (const element1 of input1) {
        let count = 0;
        for (const element2 of input2) {
          if (element2 === element1) {
            count++;
          }
        }
        if (count === 0 && resArr.indexOf(element1) === -1) {
            resArr.push(element1);
        }
      }
      return resArr;

}

//improve version of getSyDifference
// n2

function sysDifferenceOfTwo(input1, input2) {
  // remove duplicate items from  input
  const arg1 = new Set(input1);
  const arg2 = new Set(input2);
  const combinedArr = [...arg1,...arg2];
 
  // to keep a count use object
  const objCount = {};

// for of iterates over  value
console.log(combinedArr);
  for(const el of combinedArr){
    if(el in objCount){
       objCount[el]++;
    } else {
      objCount[el] = 1;
    }
  }
  console.log(objCount);
  const output = [];
// for in iterates over keys  
  for(const item in objCount){
    if(objCount[item] ===1){
      output.push(parseInt(item));
    }
  }
  return output
}


function findSymDifferenceOfAnyInputs(){
  const args = [...arguments];
  // this is  fixed condition to starts with 
  let result = sysDifferenceOfTwo(args[0],args[1]);
  for(let i=2; i< args.length;i++){
    result=sysDifferenceOfTwo(result,args[i])
  }
  return result
}

console.log(findSymDifferenceOfAnyInputs([1, 2, 3], [5, 2, 1, 4],[9,4,2,2,33,11,22,4,5,2],[11,23,22])); // [3,4,5]
