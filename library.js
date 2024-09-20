const myLibrary = [];

const body = document.querySelector("body");

/*Inputs for form*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.bookInfo = function () {
    console.log(
      `The book is called ${title} by ${author}. It is ${pages} pages long. `
    );
  };
}

const form = document.querySelector(".add-book-form");
console.log(form);

function addBookToLibrary() {
  const newBook = new Book("Fahrenheit 451", "Ray Bradbury", 242, true);
  console.log(newBook.bookInfo());
  myLibrary.push(newBook);
}

function showDialog() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

const addBtn = document.querySelector("#addBtn");
addBtn.onclick = () => showDialog();

function addBookToPage() {
  const bookSection = document.querySelector(".book-section");
  console.log(bookSection);

  const bookBackground = document.createElement("div");
  bookBackground.classList.add("book");

  const bookInfo = document.createElement("div", "info");
  bookInfo.classList.add("info");
  const title = document.createElement("h3");
  title.textContent = "Title: Fahrenheit 451";
  const author = document.createElement("h4");
  author.textContent = "Author: Ray Bradbury";
  const pageCount = document.createElement("h4");
  pageCount.textContent = "# of Pages: 242";
  bookInfo.append(title);
  bookInfo.append(author);
  bookInfo.append(pageCount);
  bookBackground.append(bookInfo);
  const buttonSection = document.createElement("div");
  buttonSection.classList.add("book-options");
  const readBtn = document.createElement("input");
  readBtn.setAttribute("type", "button");
  readBtn.classList.add("readBtn");
  readBtn.setAttribute("value", "Read");
  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.classList.add("removeBtn");
  removeBtn.setAttribute("value", "Remove");
  buttonSection.append(readBtn);
  buttonSection.append(removeBtn);
  bookBackground.append(buttonSection);
  bookSection.append(bookBackground);
}

addBookToPage();
