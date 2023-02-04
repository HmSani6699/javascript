/* 
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
*/

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let itemCount = number.length;

// item change
number[3] = 30;

//add item 
number.push(200);
number.unshift(100);

//remove item
number.pop();
number.shift()
console.log(number);
