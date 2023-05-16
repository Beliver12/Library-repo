function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (this.read === 'Read it!') {
      this.read = 'Didnt Read!'; 
    } else if (this.read === 'Didnt Read!') {
      this.read = 'Read it!';
    }
  };
}
//Book.prototype.changeRead = function () {}
const readBook = new Book('title.value', 'author.value', 'pages.value', true);
const didntreadBook = new Book('title.value', 'author.value', 'pages.value', false);

let myLibrary = [];

const newBook = document.querySelector('button');
const container = document.querySelector('#content');
const form = document.createElement('form');
const formButton = document.createElement('button');
const header = document.querySelector('#header');

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
  }
}

newBook.addEventListener('click', () => {
removeInputs(form);
createForm();
createInputs();
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
  createDivs();
  removeAllChildNodes(header);
  submitClick(event);
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
    div.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].pages} ${myLibrary[i].read}`;
div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.setAttribute('id', 'readButton');
  readButton.setAttribute('value', i);
  readButton.textContent = 'Read';
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
myLibrary[values].info();
  div.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].pages} ${myLibrary[i].read}`;
  div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.textContent = 'Read';
deleteButton.textContent = 'Remove';
  }else {
    myLibrary[values].info();
  div.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].pages} ${myLibrary[i].read}`;
  div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.textContent = 'Read';
deleteButton.textContent = 'Remove';
  }
})
  } 
}

let buttonList = document.querySelectorAll('readButton').forEach(readButton => {
  readButton.addEventListener('click', () => {
    const value = readButton.value;
    myLibrary[value].info();
  div.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].pages} ${myLibrary[i].read}`;
  div.appendChild(readButton);
  div.appendChild(deleteButton);
  readButton.textContent = 'Read';
deleteButton.textContent = 'Remove';
  })
})


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




