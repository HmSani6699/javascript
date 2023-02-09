// console.log(4534535);

//1.getElementByTagName
let bookContainer = document.getElementsByTagName('li');
// console.log(bookContainer)

//getElementById
let secondContainer = document.getElementById('book-container');
// console.log(secondContainer)

//getElementsByClassName
let title = document.getElementsByClassName('title');
// console.log(title)

//querySelectorAll
let li_s = document.querySelectorAll('li');
// console.log(li_s)

//querySelector
let arbi = document.querySelector('.arbi');
// console.log(arbi)


/* -------------check attribute---------*/

//getAttribute
let getAttribute = title[0].getAttribute('class')
// console.log(getAttribute);

//setAttribute
for (let li of li_s) {
    li.setAttribute('class', 'li_color');
};

//classList
let checkClassList = document.getElementById('second-title').classList;
for (let key of checkClassList.keys()) {
    // console.log(key)
}

//classList.add()
let thirdTitle = document.getElementById('third-title');
let addClassList = thirdTitle.classList.add('third');
console.log(thirdTitle)

//classList.remove
let removeClassList = thirdTitle.classList.remove('third');


