const fibonacci = function(pos) {
    //write a function that takes a number and returns that number position
    //of the fibonacci sequence

    //disallow negative numbers
    if (pos<0) {
        return 'OOPS'
    }

    //first, generate fibonacci sequence in an array
    const fibonacciArray = [];
    if (fibonacciArray.length < 2) {
        fibonacciArray.push(1, 1);
    }
    while (fibonacciArray.length<100) {
         //come up with next value in sequence (previous value array[array.length-1] + value preceding that array[array.length-2])
        let newVal = fibonacciArray[fibonacciArray.length-1] + fibonacciArray[fibonacciArray.length-2];
        //add that value to the array
        fibonacciArray.push(newVal);
    }

    //then return the argument's value at that position
    let value = fibonacciArray[pos-1];
    return value
};

// Do not edit below this line
module.exports = fibonacci;
