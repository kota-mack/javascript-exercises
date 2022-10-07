const getTheTitles = function(items) {
    let bookObject = {};
    for (i = 0; i < items.length; i++) {
        bookObject[items[i].title] = items[i].author;
    }
    return Object.keys(bookObject);
};

// Do not edit below this line
module.exports = getTheTitles;
