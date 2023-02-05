function publicBusFare(participants) {
    if (typeof participants != "number" || participants < 50) {
        return "Provide valid participants...";
    }
    let busSeatCapacity = 50;
    let microSeatCapacity = 11;

    let remaining = 0;
    // After calculating the amount of people who can travel by our bus
    // the value of remaining will be:-
    remaining = participants % busSeatCapacity;
    // if(remaining >=11){

    // remaining = remaining % microSeatCapacity;
    // }
    // After calculating the amount of people who can travel by our microbus
    // the value of remaining will be:-
    remaining = remaining % microSeatCapacity;

    // Now calculate the total cost of public bus
    let costOfPublicBus = remaining * 250
    return costOfPublicBus;
}
// console.log(publicBusFare(50));


// let newNum = 0;
// let number = 10
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         newNum++;
//         break;
//     }
// }

// if (newNum === 0) {
//     console.log('yes is Prime Number: ', number)
// }
// else {
//     console.log('Not is Prime Number: ', number)
// }


function primeNumber(num) {
    if (typeof unm !== 'number') {
        return 'please enter Your number';
    }

    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            count++;
            break;
        }
    }

    if (count === 0) {
        return (num, 'is prime number');
    }
    else {
        return (num, 'is not prime number');
    }
}
let result = primeNumber('sdfsf');
console.log(result)