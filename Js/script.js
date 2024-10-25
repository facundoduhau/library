// Book constructor
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Library array to store books
let myLibrary = [];

// DOM elements
const newBookButton = document.querySelector("#newBookButton");
const popup = document.querySelector("#popup");
const closePopupButton = document.querySelector("#closePopupButton");
const submitButton = document.querySelector(".input-submit-button");
const main = document.querySelector(".main");

// Create books container
const booksContainer = document.createElement("div");
booksContainer.className = "books-container";
main.insertBefore(booksContainer, newBookButton);

// Toggle popup visibility
newBookButton.addEventListener("click", () => {
  popup.classList.add("popup-toggled");
});

// Function to clear form
function clearForm() {
  document.querySelector(".book.title").value = "";
  document.querySelector(".book.author").value = "";
  document.querySelector(".book.pages").value = "";
  document.querySelector(".checkbox").checked = false;
}

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("popup-toggled");
  clearForm();
});

// Function to add book to library
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Function to display books
function displayBooks() {
  booksContainer.innerHTML = ""; // Clear current display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    bookCard.innerHTML = `
              <h3>${book.title}</h3>
              <p>by ${book.author}</p>
              <p>${book.pages} pages</p>
              <div class="book-status">
                  <label>
                      <input type="checkbox" ${book.isRead ? "checked" : ""} 
                      onchange="toggleRead(${index})">
                      Read
                  </label>
              </div>
              <button onclick="deleteBook(${index})" class="delete-btn">Delete</button>
          `;

    booksContainer.appendChild(bookCard);
  });
}

// Function to toggle read status
function toggleRead(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
  displayBooks();
}

// Function to delete book
function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Handle form submission
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.querySelector(".book.title").value;
  const author = document.querySelector(".book.author").value;
  const pages = document.querySelector(".book.pages").value;
  const isRead = document.querySelector(".checkbox").checked;

  // Basic form validation
  if (!title || !author || !pages) {
    alert("Please fill in all fields!");
    return;
  }

  // Create new book object
  const newBook = new Book(title, author, pages, isRead);

  // Add book to library
  addBookToLibrary(newBook);

  // Clear form and close popup
  clearForm();
  popup.classList.remove("popup-toggled");
});
