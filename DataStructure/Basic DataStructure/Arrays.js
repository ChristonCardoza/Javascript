// Basic Array Declaration 
let array =[1,2,3,4,5,6,7,8];
console.log("Array Elements: ",array);

// Remove Oth index from array
array.shift()

// Remove Last index from array
array.pop()

console.log("Array Elements after shift and pop: ",array);

// Remove 2 elements from array starting at index 1
array.splice(1,2)
console.log("Array Elements after splice(1,2): ",array)

// Add  9,10  to existing array from index 3, it wont change length of array array
array.splice(2,0,9,10)
console.log("Array Elements after splice(2,0,9,10): ",array)

// For every elements of array it will execute condition ,if it is check with next index, if it is not return false immediately
const com = array.every(compare)
console.log("Array method 'every' e>1: ",com)

// For every elements of array it will execute condition ,if it is return true immediately
const com3 = array.some((e) => {return e<1} )
console.log("Array method 'some' e<1: ",com3)

function compare(e){
  return (e>1);
}

// For every elements of array it will execute condition, if it is return index immediately 
const com1 = array.find(compare1)
console.log("Array method 'find' e<6: ",com1)

function compare1(e){
 
  return(e<6);
}
// copies array elements to another position in the array, overwriting the existing values, it will ignore once it reaches it original length
// copy index number 3rd value to 0 and stop copying from 4th index
console.log("Array method 'opyWithin(0,3,4)': ",array.copyWithin(0,3,4))

let itr = array.entries()
console.log("Array method 'entries' create iterator : ",itr)
for(x of itr){
  console.log(x);
}

// gives a new array whose values, whose values are same as previous but filter it by condition ie values>7
let gt5 = array.filter((e) => { return e>7}) 
console.log("Array method 'filter' e>7  : ",gt5);

// return new array , for every element it will perform some task
let gt = array.map((e) => {return Math.pow(5,e)}) 
console.log("Array method 'map' e^5  : ",gt);

// modify original array ie, takes the reference array pointing to original
array.forEach((e,i,gt1) => {gt1[i]=e*10}) 
console.log("Array method 'forEach' e*10  : ",array);

//  convert array into string
console.log("Array method 'toString' : ",array.toString())

// return single value, taking each array element as previous values and pass it to its next element
let sum = array.reduce((prev,e)=>{
  return(prev=prev+e)
})
console.log("Array method 'reduce' prev=prev+e : ",sum)

// Create a array from string
var stringArr=Array.from("acb");
console.log("Converting 'abc' as array ",stringArr);

// Sorting array in descending Order
console.log("Array method 'sort' b-a  descending order : ",array.sort((a,b) => {
  return b-a;
}))

// Sorting string array in descending Order
console.log("String Array ascending: ",stringArr.sort())
console.log("String Array descending: ",stringArr.sort().reverse())