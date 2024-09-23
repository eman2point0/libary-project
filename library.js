const myLibrary = [];

const body = document.querySelector("body");
const form = document.querySelector(".add-book-form");
const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("dialog");
const submitFormBtn = document.getElementById("submitBtn");

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

/*Button actions*/
addBtn.onclick = () => {
  dialog.showModal();
};

const removeBtns = document.querySelectorAll(".removeBtn");
removeBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    const bookSection = document.querySelector(".book-section");
    const book = button.parentElement.parentElement;
    console.log("Remove Button has been clicked!");
    bookSection.removeChild(book);
  });
});

submitFormBtn.onclick = () => {
  const bookSection = document.querySelector(".book-section");
  const titleInput = document.querySelector("#bookTitle").value;
  const authorInput = document.querySelector("#inputAuthor").value;
  const pageCount = document.querySelector("#pageNum").value;
  const read = document.querySelector(
    'input[name="read_attribute"]:checked'
  ).value;

  const newBook = new Book(titleInput, authorInput, pageCount, read);

  updateLibrary(newBook);
  addBookToPage(newBook);
  form.reset();
  dialog.close();
};

function validateReadOption(book) {
  if (book.read === "true") {
    return "green";
  } else {
    return "red";
  }
}

function updateLibrary(book) {
  myLibrary.push(book);
  console.log("New Book has been added!");
  book.bookInfo();
}

function addBookToPage(book) {
  const bookSection = document.querySelector(".book-section");

  const bookBackground = document.createElement("div");
  bookBackground.classList.add("book");

  const bookInfo = document.createElement("div");
  bookInfo.classList.add("info");

  const title = document.createElement("h3");
  title.textContent = "Title: " + book.title;

  const author = document.createElement("h4");
  author.textContent = "Author: " + book.author;

  const pageCount = document.createElement("h4");
  pageCount.textContent = "# of Pages: " + book.pages;
  bookInfo.append(title);
  bookInfo.append(author);
  bookInfo.append(pageCount);
  bookBackground.append(bookInfo);

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("book-options");

  const readBtn = document.createElement("input");
  readBtn.setAttribute("type", "button");
  readBtn.setAttribute("value", "Read");
  readBtn.classList.add("readBtn");

  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("value", "Remove");
  removeBtn.classList.add("removeBtn");
  removeBtn.addEventListener("click", (event) => {
    console.log("Remove Button has been clicked!");
    const bookSection = document.querySelector(".book-section");
    const book = removeBtn.parentElement.parentElement;
    bookSection.removeChild(book);
  });
  buttonSection.append(readBtn);
  buttonSection.append(removeBtn);
  bookBackground.append(buttonSection);
  bookSection.append(bookBackground);
}

const curiousGeorgeBook = new Book(
  "Curious George",
  "Maragaret & H.A.Rey's",
  5,
  true
);

const fahrenheitBook = new Book("Fahrenheit 451", "Ray Bradbury", 242, true);
const eragonBook = new Book("Eragon", "Chirstopher Paolini", 509, true);
myLibrary.push(curiousGeorgeBook);
myLibrary.push(eragonBook);
addBookToPage(fahrenheitBook);
myLibrary.push(fahrenheitBook);

myLibrary.forEach((book) => {
  book.bookInfo();
});
