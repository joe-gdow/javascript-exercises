const repeatString = function(str, amt) {
    var newStr = "";
    if (amt < 0) {
        return 'ERROR'
    }
    for (i=0; i<amt; i++) {
        newStr += str;
    }
    return newStr
};

// Do not edit below this line
module.exports = repeatString;
