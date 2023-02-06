
let array = [12, 34, 50, 39, 40, 64, 10];
let arraySort = array.sort(function (a, b) { return (a - b) });
let secondLargestNumber = arraySort[arraySort.length - 2];
// console.log(secondLargestNumber)


var arr = [20, 120, 111, 215, 54, 78];

arr.sort(function (a, b) {
    return a - b;
});

// console.log(arr[arr.length - 2], arr);


/* let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i 
}
// console.log(factorial)
*/


function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
    else {
        return "number has to be positive."
    }
}
let n = 1;
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);



function average(arrOfMarks) {
    //write your code here
    // don't forget to write return
    let sum = 0;
    for (let i = 0; i < arrOfMarks.length; i++) {
        let element = arrOfMarks[i];
        sum += element
    }
    let gorNumber = sum / arrOfMarks.length;
    let number = gorNumber.toFixed(2);
    if (typeof number === 'number') {
        return number
    }

}


function checkTriangle(side1, side2, side3) {
    let num = '';
    if (side1 > side2 || side1 > side3) {
        num = 'Yes'
    }
    else {
        num = 'No'
    }
    return num
}

console.log(checkTriangle(6, 8, 6))










/* Input:

Output:
"YES"
﻿
Case 2:
Input:
[
    {
        lastName: 'Mithila',
    }, 'fname'
]
Output: */