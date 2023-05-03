const newBook = document.querySelector('.add-button');
const body = document.querySelector('body');
const form = document.createElement('form');
const formButton = document.createElement('button');
const outputBox = document.createElement('div');

form.setAttribute('method', 'post');

function createForm() {
  body.appendChild(form);
  return form;
}

function createInputs() {
  for (let i = 0; i < 5; i++) {
    const labelInput = document.createElement('label');
    const titleInput = document.createElement('input');
    if (i === 0) {
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('name', 'title');
      titleInput.setAttribute('placeholder', 'Title');
      titleInput.setAttribute('id', 'title');
    }
    if (i === 1) {
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('name', 'author');
      titleInput.setAttribute('placeholder', 'Author');
      titleInput.setAttribute('id', 'author');
    }
    if (i === 2) {
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('name', 'pages');
      titleInput.setAttribute('placeholder', 'Pages');
      titleInput.setAttribute('id', 'pages');
    }
    if (i === 3) {
      titleInput.setAttribute('type', 'radio');
      titleInput.setAttribute('name', 'answer');
      titleInput.setAttribute('id', 'radio-yes');
      titleInput.setAttribute('value', 'read');
      labelInput.textContent = 'Read:';
      labelInput.setAttribute('for', 'radio-yes');
    }
    if (i === 4) {
      titleInput.setAttribute('type', 'radio');
      titleInput.setAttribute('name', 'answer');
      titleInput.setAttribute('id', 'radio-no');
      titleInput.setAttribute('value', 'not-read');
      labelInput.textContent = 'Not Read:';
      labelInput.setAttribute('for', 'radio-no');
      formButton.setAttribute('type', 'submit');
      formButton.textContent = 'Submit';
    }
    form.appendChild(labelInput);
    form.appendChild(titleInput);
    form.appendChild(formButton);
    body.appendChild(outputBox);
  }
}

const myLibrary = [];

function clearAndShow() {
  title.value = '';
  author.value = '';
  pages.value = '';
  outputBox.innerHTML = '';
  outputBox.innerHTML += `Title: ${myLibrary[0]}<br/>`;
  outputBox.innerHTML += `Author: ${myLibrary[1]}<br/>`;
  outputBox.innerHTML += `Pages: ${myLibrary[2]}`;
}

function insert() {
  myLibrary.push(title.value);
  myLibrary.push(author.value);
  myLibrary.push(pages.value);
  clearAndShow();
}

function submitClick(event) {
  event.preventDefault();
}

formButton.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  insert();
  submitClick(event);
});
function removeInputs(form) {
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
}

newBook.addEventListener('click', () => {
  removeInputs(form);
  createForm();
  createInputs();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.addBook = function () {
    if (!title) {
      return '';
    }
    return title;
  }
}

const firstBook = new Book('Nikola', 'gaf', 'ags', true);
console.log(firstBook.addBook());

function addBookToLibrary(book) {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}
addBookToLibrary();

