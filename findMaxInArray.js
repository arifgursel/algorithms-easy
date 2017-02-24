// Find Max
// ========
//
// Write a program (set of instructions) that takes any array and prints the maximum value in the array.
// Your program should also work with a given array that has all negative numbers (example: [-3, -5, -7]),
// or even a mix of positive numbers, negative numbers and zero.

function findMaxInArray(inputArray){
    var max = inputArray[0];
    for(i=1;i < inputArray.length;i++){
        if(max < inputArray[i]){
            max = inputArray[i];
        }
    }
    console.log("Maximum # is:",max);
}

findMaxInArray([10,23,3,44,0,-1,-1000,8548383,-22,.449]);