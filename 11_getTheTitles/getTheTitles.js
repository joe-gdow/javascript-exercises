const getTheTitles = function(books) {
    //take array as an argument and create a new array of book titles taken from objects in the array
    const titles = books.map(book => book.title);
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
