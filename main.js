const array = [1,2,4,5,6,7,9,11];
const target = 15;

/*Solution 1 */
// let sumFunc = function(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0 ; j < array.length; j++) {
//             if (array[i] + array[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };
//console.log(sumFunc(array,target));

/*Solution 2 */
// let sumFunc2 = function(array, target) {
//     const ind = new Map();

//     for (let index = 0; index < array.length; index++) {
//         const complement = target - array[index];

//         if (ind.has(complement)) {
//             return [ind.get(complement), index]
//         }
//         ind.set(array[index], index)
//     }
// };
// console.log(sumFunc2(array,target));

/*Solution 3 */

let sumFunc3 = (array, sum) => {
    let storageHash = {}
    let nums = []
    
    for(let i in array){
      let addend = sum - array[i];
        if (addend in storageHash){
            let ind = [array.indexOf(addend),array.indexOf(array[i])];
            nums.push(ind);
        }
        storageHash[array[i]] = i
    }
    return nums
}

console.log(sumFunc3(array,target));