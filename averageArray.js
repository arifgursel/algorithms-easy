// Get Average
// ===========

// Write a program that takes an array, and prints the AVERAGE of the values in the array.
// For example: for an array: [2,10,3], your program should print"average of 5".

// NOTE: Make sure you come up with a simple base case and write instructions to solve that base case first.
// Then test your instructions for other complicated cases.
function averageArray(inputArray) {
    var sum = 0;
    var length = inputArray.length;
    var avg = 0;
    for(i=0; i<length; i++) {
        sum += inputArray[i];
    }
    avg = sum/length;
    console.log("average of "+avg);
        
    return;
}

var test = [1,2,3,4];
averageArray(test);