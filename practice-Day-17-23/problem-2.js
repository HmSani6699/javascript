
let array = [12, 34, 50, 39, 40, 64, 10];
let arraySort = array.sort(function (a, b) { return (a - b) });
let secondLargestNumber = arraySort[arraySort.length - 2];
// console.log(secondLargestNumber)


var arr = [20, 120, 111, 215, 54, 78];

arr.sort(function (a, b) {
    return a - b;
});

console.log(arr[arr.length - 2], arr);
