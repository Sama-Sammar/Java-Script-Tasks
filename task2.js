// 1. createBook() - function returning a book object

function createBook(id, title, author, category = "General", year = new Date().getFullYear()) {
    return {
        id,
        title,
        author,
        category,
        year,
        location: { shelf: "A1", floor: 1 }// 15. Nested location object
    };
}

// 2. addBooks(...books) - store books in global library array

let library = [];
function addBooks(...books) { //rest parameters
    books.forEach(b => library.push(b));
}

// 3. randomPicker(...args) - returns random element

function randomPicker(...args) {
    return args[Math.floor(Math.random() * args.length)];
}

// 4. logBook - anonymous function to print formatted info

let logBook = function (book) {
    console.log(`Book ${book.title} by ${book.author} [${book.category}]`);// template literal
};

// 5. counter() with nested function generator for IDs

function counter() {
    let count = 1;
    return function () {
        return count++;
    };
}
let generateID = counter();

// 6. Arrow: getBookById : parameter is id 

const getBookById = id => library.find(b => b.id === id);

// 8. libraryStats() using lexical scope

function libraryStats() {
    let total = library.length;
    let categories = new Set(library.map(b => b.category));// set to delete repeated catagories 

    function printStats() {
        console.log(`Total Books: ${total}`);
        console.log(`Categories: ${[...categories].join(", ")}`);// spread
    }

    printStats();
}

// 9. Arrow: books older than 10 years

const oldBooks = () => library.filter(b => (new Date().getFullYear() - b.year) > 10);

// 10. getTitles() using map

function getTitles() {
    return library.map(b => b.title);
}

// 11. filterByCategory(category) using filter

function filterByCategory(category) {
    return library.filter(b => b.category === category);
}

// 12. countBooksByAuthor() using reduce
// object with author name and book count 
function countBooksByAuthor() {
    return library.reduce((acc, b) => {
        acc[b.author] = (acc[b.author] || 0) + 1;
        return acc;
    }, {});
}

// 13. forEach to print all books

function printAllBooks() {
    library.forEach(b => console.log(`${b.title} - ${b.author}`));
}

// 14. searchBooks(keyword)

function searchBooks(keyword) {
    keyword = keyword.toLowerCase();
    return library.filter(b =>
        b.title.toLowerCase().includes(keyword) ||
        b.author.toLowerCase().includes(keyword)
    );
}

// 16. dot notation + bracket notation

function notationDemo(book) {
    console.log(book.title); // dot notation
    console.log(book["author"]); // bracket notation
}

// 17. Constructor function Book()  => new...

function Book(title, author, category = "General", year = new Date().getFullYear()) {
    this.id = generateID();
    this.title = title;
    this.author = author;
    this.category = category;
    this.year = year;
    this.location = { shelf: "B2", floor: 2 };
}

// 18. Object.create() for library manager

const managerProto = {
    add(b) {
        library.push(b);
    },
    list() {
        console.log(library);
    }
};

const manager = Object.create(managerProto);

// 19. Object.assign() to merge settings

const defaultSettings = { theme: "light", language: "en", autosave: false };
const userSettings = { theme: "dark", autosave: true };
const finalSettings = Object.assign({}, defaultSettings, userSettings);

// Create at least 6 books (using multiple methods)

let b1 = createBook(generateID(), "JS Guide", "Sama", "Programming", 2018);
let b2 = createBook(generateID(), "CSS Mastery", "Omar");
let b3 = { id: generateID(), title: "HTML Basics", author: "Lana", category: "Web", year: 2010, location: { shelf: "C1", floor: 1 } };
let b4 = randomPicker(b1, b2, b3);
let b5 = new Book("React Handbook", "Omar", "Programming", 2015);
let b6 = new Book("Node.js Intro", "Sama", "Backend", 2021);

addBooks(b1, b2, b3, b5, b6);

// Display final outputs

console.log("Task 10 — All Titles:");
console.log(getTitles());

console.log("\nTask 11 — Programming Category Books:");
console.log(filterByCategory("Programming"));

console.log("\nTask 9 — Books older than 10 years:");
console.log(oldBooks());

console.log("\nTask 14 — Search for 'js':");
console.log(searchBooks("js"));

console.log("\nTask 12 — Books by Author Count:");
console.log(countBooksByAuthor());

console.log("\nTask 16 — Notation Demo (Dot vs Bracket):");
notationDemo(b1);

console.log("\nTask 8 — Library Stats:");
libraryStats();

console.log("\nTask 13 — Print All Books:");
printAllBooks();
