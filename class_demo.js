/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise
*/
class Book{
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=true;
    }
    borrow(){
        this.isAvailable=false;

    }
    returnBook(){
        this.isAvailable=true;
    }
    getInfo(){
    return `The ${this.title} by ${this.author} (${this.pages} pages)` ;
    }
    isLongBook(){
       return this.pages>300;
    }
}



//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
let book1=new Book("Harry porter","Sriman",350);
let book2=new Book("cindrella","tanmai",500);
let book3=new Book("python","varshith",200);
let book4=new Book("java","bharath",500);
let book5=new Book("dbms","salar",600);
let books=[book1,book2,book3,book4,book5]

//   2. Perform the following operations:

//       i. Display info of all books
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
console.log(book4.getInfo());
console.log(book5.getInfo());

//       ii. Borrow 2 books and show their availability status
//making book1 and book4 are borrowed 
book1.borrow();
book4.borrow();
console.log(book1.title,":",book1.isAvailable);
console.log(book4.title,":",book4.isAvailable);

//       iii. Return 1 book and show updated status
//returning book4 
book4.returnBook();
console.log(book4.title,":",book4.isAvailable);

//       iv. Count how many books are "long books" (more than 300 pages)
let countLongBook=books.filter(book => (book.isLongBook()));
console.log("count of long books:",countLongBook.length)
//       v. List all available books
let availableBooks=books.filter(book => book.isAvailable);
console.log("Available books are:")
for(let book of availableBooks){
    console.log(book.getInfo());
}