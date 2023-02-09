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
    li.style.listStyle = 'none';
    li.style.marginLeft = '0px';
};

//ul
let ul_s = document.getElementsByTagName('ul');
for (let ul of ul_s) {
    ul.style.marginLeft = '0px';
}

//classList
let checkClassList = document.getElementById('second-title').classList;
for (let key of checkClassList.keys()) {
    // console.log(key)
}

//classList.add()
let thirdTitle = document.getElementById('third-title');
let addClassList = thirdTitle.classList.add('third');
// console.log(thirdTitle)

//classList.remove
let removeClassList = thirdTitle.classList.remove('third');


/* ---------------js style ------------ */

let sections = document.getElementsByTagName('section');
for (let section of sections) {
    section.style.border = '2px solid gray';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
    section.style.textAlign = 'center';
    section.style.background = '#00bcd4';
}

/* ------ innerText and innerHtml ---- */

//innerText
let thirdSectionTitle = document.querySelector('#third-section h1');
let innerText = thirdSectionTitle.innerText;

//set innerText
let setText = thirdSectionTitle.innerText = 'Alahmdolillha allah vorosa';

//innerHtml
let thirdSection = document.getElementById('third-section');
let innerHtml = thirdSection.innerHTML;
// console.log(innerHtml)


/* ---------------New Section add-----------*/

let main = document.getElementById('main-container');
console.log(main)
