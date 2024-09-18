// Page elements.

const newBook = document.querySelector('#newBook');
const deleteBook = document.querySelector('#deleteBook');
const favoriteBook= document.querySelector('#favoriteBook');
const library = document.querySelector('#library');

// Declare variables.

var bookWrapper;
var book;

// Creates the required books elements.
const createElements = function() {

  bookWrapper = document.createElement('div');
  book = document.createElement('div');
}

// Gives the elements their respective class
const giveClass = () => {

  bookWrapper.classList.add('book-wrapper');
  book.classList.add('book');

}

// Adds all the appended divs to the "library" element.
const addBook = () => {

  library.appendChild(bookWrapper); 

}

// Creates new elements, appends them, and later on appends bookWrapper to the "library".
newBook.addEventListener('click', () => {
  
  createElements();
  giveClass();
  addBook();
});
