// JAVASCRIPT
/*
  Write a method named "compareArrays" to determine if two arrays are equal (they have same elements in same position)
  
  Testing:
  
  arrA = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
  arrB = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
  arrC = [1, 2, 3, [], 4, [5, 5, [7, 99]]]
  arrD = [[], 1, 2, 3]
  
  console.log(compareArrays(arrA, arrB)); //expected true 
  arrA = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
  arrB = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
  
  console.log(compareArrays(arrA, arrC)); //expected false 
  arrA = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
  arrC = [1, 2, 3, [], 4, [5, 5, [7, 99]]]
  
  console.log(compareArrays(arrC, arrD)); //expected false 
  arrC = [1, 2, 3, [], 4, [5, 5, [7, 99]]]
  arrD = [[], 1, 2, 3]
  
  Restriction: 
  You can not compare the string representation of the entire arrays
  
*/

const arrB = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
const arrD = [[1], 1, 2, 3]

const arrG = [1,2,3,4, []]
const arrH = [[1], 1, 2, 3]


const arrA = [1, 2, 3, [], 4, [5, 5, [7, 8]]]
const arrC = [1, 2, 3, [], 4, [5, 5, [7, 99]]]

const arrE = [[], 4, [5, 5, [7, 8]]]
const arrF = [[], 4, [5, 5, [7, 99]]]

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr2.length; i++) {
      const item1 = arr1[i];
      const item2 = arr2[i];

      if (typeof item1 !== typeof item2) return false;

      if (Array.isArray(item1) && Array.isArray(item2)) {
        if (!compareArrays(item1, item2)) return false;
      } else if (Number.isInteger(item1) && Number.isInteger(item2)) {
        if (item1 !== item2) return false;
      }
    }

    return true;
}

console.log('A', ' B', compareArrays(arrA, arrB)); //expected true 
console.log('A', ' C', compareArrays(arrA, arrC)); //expected false 
console.log('C', ' D', compareArrays(arrC, arrD)); //expected false 
console.log('E', ' F', compareArrays(arrE, arrF)); //expected false 
console.log('D', ' H', compareArrays(arrD, arrH)); //expected true 
console.log('F', ' G', compareArrays(arrF, arrG)); //expected false 
console.log('C', ' E', compareArrays(arrC, arrE)); //expected false 