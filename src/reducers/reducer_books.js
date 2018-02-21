// it return an array of books all the time, without any more logic

// later in the main reducer (index.js)  we combine all the reducers into one

export default function() {
    return [
        { "title" : "Harry Potter", "pages" : 121},
        { "title" : "Javascript", "pages" : 12},
        { "title" : "Elastic", "pages" : 23},
        { "title" : "Mongo", "pages" : 46},
    ]
}