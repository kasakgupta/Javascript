// Using forEach and filter methods on arrays

const coding = ["js", "ruby", "java", "python", "cpp"];

// The forEach method returns undefined, not an array of values
const values = coding.forEach((item) => {
    // console.log(item); // Uncomment to log each item
    return item; // This return statement does not affect the forEach method's return value
});

console.log(values); // Logs undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the filter method to create a new array with elements greater than 4
const newNums = myNums.filter((num) => {
    return num > 4;
});

// Using forEach to manually filter elements greater than 4 into a new array
const newNumsManual = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNumsManual.push(num);
    }
});

console.log(newNums); // Logs [5, 6, 7, 8, 9, 10]
console.log(newNumsManual); // Logs [5, 6, 7, 8, 9, 10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books with the genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');

console.log(userBooks); // Logs books with genre 'History'

// Filtering books published after 1995 with the genre 'History'
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks); // Logs books with genre 'History' and published after 1995
