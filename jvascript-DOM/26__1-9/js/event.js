//awy 1
/* <button onclick="console.log('allah tomi amy kobol koro')">Button</button> */

//awy 2
function redFunction() {
    document.body.style.background = 'red';
}

//awy 3
let yellowBtn = document.getElementById('yellow-btn');
yellowBtn.onclick = yellowFunction;
function yellowFunction() {
    document.body.style.background = 'yellow'
}

//awy author 3
let greenBtn = document.getElementById('green-btn');
greenBtn.onclick = function () {
    document.body.style.background = 'green';
}

//awy 4
let blueBtn = document.getElementById('blue-btn');
blueBtn.addEventListener('click', blueFunction);
function blueFunction() {
    document.body.style.background = 'blue'
}

// author 4
let orangeBtn = document.getElementById('orange-btn');
orangeBtn.addEventListener("click", function () {
    document.body.style.background = 'orange';
})


//awy 5
let blackBtn = document.getElementById('black-btn').addEventListener('click', function () {
    document.body.style.background = 'black'
});