//getElementByTagName
let tagNames = document.getElementsByTagName('h1');
for (const tagName of tagNames) {
    let background = tagName.style.background = "yellow";
    let border = tagName.style.border = ' 2px solid red';
    let padding = tagName.style.padding = ' 20px';
    console.log(padding)
}

//getElementById
let listItem = document.getElementById('list-item');
// console.log(listItem)

//getElementsByClassName
let items = document.getElementsByClassName('list-item');
// console.log(items);

//querySelector
let bookList = document.querySelector('#book-list');
// console.log(bookList)

//querySelectorAll
let panList = document.querySelectorAll('pan-list');
// console.log(panList)

