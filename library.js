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

function addBookToLibrary() {
  const newBook = new Book("Fahrenheit 451", "Ray Bradbury", 242, true);
  console.log(newBook.bookInfo());
  myLibrary.push(newBook);
}

/*Button actions*/
addBtn.onclick = () => {
  dialog.showModal();
};

submitFormBtn.onclick = () => {
  const bookSection = document.querySelector(".book-section");
  const titleInput = document.querySelector("#bookTitle").value;
  const authorInput = document.querySelector("#inputAuthor").value;
  const pageCount = document.querySelector("#pageNum").value;
  const read = document.querySelector(
    'input[name="read_attribute"]:checked'
  ).value;

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const bookInfo = document.createElement("div");
  bookInfo.classList.add("info");

  const title = document.createElement("h3");
  title.textContent = "Title: " + titleInput;

  const author = document.createElement("h4");
  author.textContent = "Author: " + authorInput;

  const pages = document.createElement("h4");
  pages.textContent = "# of pages: " + pageCount;

  const newBook = new Book(titleInput, authorInput, pageCount, read);

  console.log(
    "Validated if book is read or not: " + validateReadOption(newBook)
  );
  myLibrary.push(newBook);
  console.log(newBook);
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(pages);

  bookDiv.appendChild(bookInfo);

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("book-options");

  const readBtn = document.createElement("input");
  readBtn.setAttribute("type", "button");
  readBtn.setAttribute("value", "Read");
  readBtn.classList.add("readBtn");

  readBtn.style.backgroundColor = validateReadOption(newBook);

  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("value", "Remove");
  removeBtn.classList.add("removeBtn");

  buttonSection.appendChild(readBtn);
  buttonSection.appendChild(removeBtn);

  bookDiv.appendChild(buttonSection);
  bookSection.appendChild(bookDiv);
  form.reset();
  dialog.close();
};

function validateReadOption(Book) {
  if (Book.read === "true") {
    return "green";
  } else {
    return "red";
  }
}

const readButtons = document.querySelectorAll(".readBtn");
readButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

function addBookToPage() {
  const bookSection = document.querySelector(".book-section");

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
  readBtn.setAttribute("value", "Read");
  readBtn.classList.add("readBtn");

  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("value", "Remove");
  removeBtn.classList.add("removeBtn");
  buttonSection.append(readBtn);
  buttonSection.append(removeBtn);
  bookBackground.append(buttonSection);
  bookSection.append(bookBackground);
}

addBookToPage();
