const sumAll = function(start, end) {
    let ans = 0;
    if (start > end) {
        const flip = [end, start];
        start = flip[0];
        end = flip[1];
    }
    else if ((start < 0) || (end < 0) || (typeof start != 'number') || 
            (typeof end != 'number')) {
        return "ERROR"
    }
    for (i=start; i<=end; i++) {
        ans = ans + i;
    }
    return ans
};

// Do not edit below this line
module.exports = sumAll;
