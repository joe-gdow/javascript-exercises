const removeFromArray = function(array, ...nums) {
    for (arg of nums) {
        if (array.includes(arg)) {
            array.splice(array.indexOf(arg), 1);
        }
        else {
            continue
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
