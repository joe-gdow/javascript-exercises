const removeFromArray = function(array, ...nums) {
    for (arg of nums) {
        if (array.includes(arg)) {
            console.log(arg + "is in " + array);
            array.splice(array.indexOf(arg), 1);
            console.log(array);
        }
        else {
            console.log(arg + "is not in " + array);
            continue
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
