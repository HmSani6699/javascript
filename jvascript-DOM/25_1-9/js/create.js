/* ---------------New Section add-----------*/

let main = document.getElementById('main-container');

//create section
let section = document.createElement('section');

//create h1
let h1 = document.createElement('h1');
h1.innerText = 'New section';
//h1 appendChild to section
section.appendChild(h1)

//create ul
let ul = document.createElement('ul');

//create li
let li = document.createElement('li');
li.innerText = 'goljar';
//appendChild
ul.appendChild(li);

//create li
let li_1 = document.createElement('li');
li_1.innerText = 'raju';
//appendChild
ul.appendChild(li_1);

//create li
let li_2 = document.createElement('li');
li_2.innerText = 'thalha';
//appendChild
ul.appendChild(li_2);

//create li
let li_3 = document.createElement('li');
li_3.innerText = 'fhim';
//appendChild
ul.appendChild(li_3);

//appendChild
section.appendChild(ul);

//appendChild
main.appendChild(section)


/* -----------------new section-------------- */
let section_1 = document.createElement('section');

section_1.innerHTML = `
<h1>New section one</h1>
  <ul>
        <li>sani mia</li>
        <li>naoman</li>
        <li>josim</li>
        <li>nor</li>
  </ul>
`
main.appendChild(section_1)