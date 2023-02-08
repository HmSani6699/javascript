let sum_1 = 0;
for (let i = 0; i <= 5; i++) {
    sum_1 += i
}
// console.log(sum_1)


function sum(num) {
    if (num == 1) {
        return num
    }
    return num + sum(num - 1);
}

/* 
5 + sum(4)
5 + 4 + sum(3)
5 + 4 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1 sum(0)
5 + 4 + 3 + 2 + 1 + 0
*/


let factorialNUmber = 1;
for (let i = 5; i >= 1; i--) {
    factorialNUmber *= i
}

console.log(factorialNUmber)

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1)
}
let output = factorial(5);
console.log(output)

/* 
3 * factorial(2);
3 * 2 * factorial(1)
3 * 2 * 1 * factorial(0)
*/