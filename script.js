class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  readStatus() {
    if (this.read === 'Read it!') {
      this.read = 'Didnt Read!';
    } else if (this.read === 'Didnt Read!') {
      this.read = 'Read it!';
    }
  }
}

let myLibrary = [];

const newBook = document.querySelector('button');
const container = document.querySelector('#content');
const form = document.createElement('form');
const formButton = document.createElement('button');
const header = document.querySelector('#header');
const removeForm = document.createElement('button');

function createInputs() {
  for (let i = 0; i < 5; i++) {
    const labelInput = document.createElement('label');
    const titleInput = document.createElement('input');
    if (i === 0) {
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('name', 'title');
      titleInput.setAttribute('placeholder', 'Title');
      titleInput.setAttribute('id', 'title');
      titleInput.setAttribute('required', 'true');
    }
    if (i === 1) {
      titleInput.setAttribute('type', 'text');
      titleInput.setAttribute('name', 'author');
      titleInput.setAttribute('placeholder', 'Author');
      titleInput.setAttribute('id', 'author');
      titleInput.setAttribute('required', 'true');
    }
    if (i === 2) {
      titleInput.setAttribute('type', 'number');
      titleInput.setAttribute('name', 'pages');
      titleInput.setAttribute('placeholder', 'Pages');
      titleInput.setAttribute('id', 'pages');
      titleInput.setAttribute('required', 'true');
    }
    if (i === 3) {
      titleInput.setAttribute('type', 'radio');
      titleInput.setAttribute('name', 'answer');
      titleInput.setAttribute('id', 'radio-yes');
      titleInput.setAttribute('value', 'Read it was great book!');
      titleInput.setAttribute('checked', 'true');
      labelInput.textContent = 'Read:';
      labelInput.style.color = 'white';
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
      labelInput.style.color = 'white';
    }
    form.appendChild(labelInput);
    form.appendChild(titleInput);
    form.appendChild(formButton);
    form.appendChild(removeForm);
    removeForm.textContent = 'X';
    removeForm.setAttribute('id', 'removeForm');
  }
}

newBook.addEventListener('click', () => {
removeInputs(form);
createForm();
createInputs();
});

removeForm.addEventListener('click', () => {
  removeAllChildNodes(header);
});

function createForm() {
  header.appendChild(form);
  return form;
}

function removeInputs(form) {
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
}

function removeAllChildNodes(header) {
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
}

function submitClick(event) {
event.preventDefault();
}

formButton.addEventListener('click', () => {
  insert();
  if (title.value === '' || author.value === '' || pages.value === '') {
    return false;
  }
  createDivs();
  submitClick(event);
  title.value = '';
  author.value = '';
  pages.value = '';
});

function insert() { 
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read;
  if (document.getElementById('radio-yes').checked) {
   read = 'Read it!';
  } else if (document.getElementById('radio-no').checked) {
     read = 'Didnt Read!';
  }
  
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}




function createDivs() {
for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
  const readButton = document.createElement('button');
 const div = document.createElement('div');
const deleteButton = document.createElement('button');
  div.classList.add('book');
  container.appendChild(div);
    div.innerHTML = `*Title: ${myLibrary[i].title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    *Author: ${myLibrary[i].author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    *Pages: ${myLibrary[i].pages}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp; ${myLibrary[i].read}`;
div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.setAttribute('id', 'readButton');
  readButton.setAttribute('value', i);
  readButton.textContent = 'Read';
  deleteButton.setAttribute('id', 'deleteButton');
deleteButton.textContent = 'Remove';
setAtr(div)
deleteButton.addEventListener('click', () => {
  removeDivs(div);
});

readButton.addEventListener('click', () => {
  let value = document.getElementById('readButton').value;
 let values = parseFloat(value);
  console.log(values);
  if(values < i) {
    values += i;
myLibrary[values].readStatus();
  div.innerHTML = `*Title: ${myLibrary[i].title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  *Author: ${myLibrary[i].author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  *Pages: ${myLibrary[i].pages}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp; ${myLibrary[i].read}`;
  div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.textContent = 'Read';
deleteButton.textContent = 'Remove';
  } else {
    myLibrary[values].readStatus();
  div.innerHTML = `*Title: ${myLibrary[i].title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  *Author: ${myLibrary[i].author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  *Pages: ${myLibrary[i].pages}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp; ${myLibrary[i].read}`;
  div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.textContent = 'Read';
deleteButton.textContent = 'Remove';
  }
})
  } 
}

    function removeDivs(div) {
      if (div.parentNode) {
        div.parentNode.removeChild(div);
        myLibrary.pop(['data-book']);
      }
    }

    function setAtr(div) {
         for(let i = 0; i < myLibrary.length; i++){
          div.setAttribute('data-book', i);
         }
    }



