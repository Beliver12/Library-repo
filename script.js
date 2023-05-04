/* eslint-disable no-restricted-syntax */
/* eslint-disable no-else-return */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const newBook = document.querySelector('.add-button');
const body = document.querySelector('body');
const form = document.createElement('form');
const formButton = document.createElement('button');
const outputBox = document.createElement('div');
const outputBox2 = document.createElement('div');
const outputBox3 = document.createElement('div');
const readButton = document.createElement('button');

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
      titleInput.setAttribute('value', 'Read it was great book!');
      labelInput.textContent = 'Read:';
      labelInput.setAttribute('for', 'radio-yes');
    }
    if (i === 4) {
      titleInput.setAttribute('type', 'radio');
      titleInput.setAttribute('name', 'answer');
      titleInput.setAttribute('id', 'radio-no');
      titleInput.setAttribute('value', 'Didnt read it yet!');
      labelInput.textContent = 'Not Read:';
      labelInput.setAttribute('for', 'radio-no');
      formButton.setAttribute('type', 'submit');
      formButton.textContent = 'Submit';
    }
    form.appendChild(labelInput);
    form.appendChild(titleInput);
    form.appendChild(formButton);
    body.appendChild(outputBox);
    body.appendChild(outputBox2);
    body.appendChild(outputBox3);
  }
}

const myLibrary = [];

function clearAndShow() {
  title.value = '';
  author.value = '';
  pages.value = '';
  if (myLibrary.length <= 5) {
    outputBox.innerHTML = '';
    outputBox.innerHTML += `Title:  ${myLibrary[0]}<br/>`;
    outputBox.innerHTML += `Author: ${myLibrary[1]}<br/>`;
    outputBox.innerHTML += `Pages:  ${myLibrary[2]}<br/>`;
    outputBox.innerHTML += `Read:  ${myLibrary[3]}<br/>`;
  } else if (myLibrary.length <= 10) {
    outputBox2.innerHTML = '';
    outputBox2.innerHTML += `Title:  ${myLibrary[5]}<br/>`;
    outputBox2.innerHTML += `Author: ${myLibrary[6]}<br/>`;
    outputBox2.innerHTML += `Pages:  ${myLibrary[7]}<br/>`;
  } else {
    outputBox3.innerHTML += `Title:  ${myLibrary[8]}<br/>`;
    outputBox3.innerHTML += `Author: ${myLibrary[9]}<br/>`;
    outputBox3.innerHTML += `Pages:  ${myLibrary[10]}<br/>`;
  }
}

function insert() {
  myLibrary.push(title.value);
  myLibrary.push(author.value);
  myLibrary.push(pages.value);
  if (document.getElementById('radio-yes').checked) {
    myLibrary.push(readBook.info());
  } else if (document.getElementById('radio-no').checked) {
  myLibrary.push(didntreadBook.info());
  }
  clearAndShow();
}

function submitClick(event) {
  event.preventDefault();
}

formButton.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const radioyes = document.getElementById('radio-yes');
  const radiono = document.getElementById('radio-no');
  insert();
  submitClick(event);
  outputBox.appendChild(readButton);
  readButton.setAttribute('class', 'readButton');
  readButton.textContent = 'toggle';
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
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.info = function () {
    if (read === true) {
      return 'Read it was great book!';
    } else {
      return 'Didnt read it yet!';
    }
  };
}

const readBook = new Book('title.value', 'author.value', 'pages.value', true);
const didntreadBook = new Book('title.value', 'author.value', 'pages.value', false);

function addBookToLibrary(book) {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}
addBookToLibrary();