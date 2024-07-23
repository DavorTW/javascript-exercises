const getTheTitles = function(books) {
    // let titles = [];
    // books.forEach(book => {
    //     for (const key in book) {
    //         if ( key === "title") {
    //             titles.push(book[key]);
    //         }
    //     }
    // });
    
    // return titles;

    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
