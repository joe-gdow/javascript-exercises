const reverseString = function(str) {
    const array = str.split('');
    const revArr = array.reverse();
    
    return revArr.join('')
};

// Do not edit below this line
module.exports = reverseString;
