//getElementByTagName
let tagNames = document.getElementsByTagName('h1');

for (const tagName of tagNames) {
    let background = tagName.style.background = "yellow";
    let border = tagName.style.border = ' 2px solid red';
    let padding = tagName.style.padding = ' 20px';
    let textCenter = tagName.style.textAlign = ' center';
    let borderTopRightRadius = tagName.style.borderTopRightRadius = '20px';
    let borderRadius = tagName.style.borderBottomLeftRadius = '20px';
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


//getAttribute
let container = document.getElementsByClassName('border');
// console.log(container[0].getAttribute('title'))

//classList
// console.log(container[0].classList.add('tttttt'));
// console.log(container[0].classList.remove('tttttt'));
// console.log(container[0].classList)


// setAttribute
// let btn = document.getElementById('input');
// console.log(btn.setAttribute('type', 'button'))
// console.log(btn.setAttribute('value', 'button'))

//innerText
let getText = document.getElementById('bang');
// console.log(getText.innerText)

//innerHtml
// console.log(getText.innerHTML)

