const newBook = document.querySelector('#newBook');
const deleteBook = document.querySelector('#deleteBook');
const favoriteBook= document.querySelector('#favoriteBook');

newBook.addEventListener("click", () => {
  console.log("Add new book")
});

deleteBook.addEventListener("click", () => {
  console.log("Delete this book")
});

favoriteBook.addEventListener("click", () => {
  console.log("Favorite this book")
});
